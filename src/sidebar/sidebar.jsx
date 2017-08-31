/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { autobind } from 'core-decorators';
import React from 'react';
import ReactDOM from 'react-dom';
import Type from 'prop-types';

import Label from '../label/fantasy';
import Icon from '../icon/icon';
import PopupContainerProvider from '../popup-container-provider/popup-container-provider';

import cn from '../cn';
import performance from '../performance';

let savedScrollPosition;

/**
 * Изменяет класс для body. Нужен для управления скроллом
 * основного экрана при показе холодильника.
 *
 * @param {Boolean} visible Признак видимости сайдбара.
 */
function setBodyClass(visible) {
    document.body.classList[visible ? 'add' : 'remove']('sidebar-visible');
    document.body.style.top = `-${savedScrollPosition}px`;
}

/**
 * Компонент боковой панели aka холодильник.
 */
@cn('sidebar')
@performance()
class Sidebar extends React.Component {
    static propTypes = {
        /** Тема компонента */
        theme: Type.oneOf(['alfa-on-color', 'alfa-on-white']),
        /** Дополнительный класс */
        className: Type.oneOfType([Type.func, Type.string]),
        /** Дочерние компоненты */
        children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
        /** Признак для отрисовки элемента закрытия */
        hasCloser: Type.bool,
        /** Признак появления холодильника */
        visible: Type.bool.isRequired,
        /** Обработчик клика на элемент закрытия */
        onCloserClick: Type.func,
        /** Действие */
        action: Type.shape({
            text: Type.string,
            onClickToAction: Type.func
        })
    };

    static defaultProps = {
        hasCloser: true
    };

    sidebar = null;

    componentDidMount() {
        setBodyClass(this.props.visible);
        this.sidebarNode = ReactDOM.findDOMNode(this.sidebar);
        this.sidebarNode.addEventListener('transitionend', this.animationEnd);
    }

    componentWillReceiveProps(nextProps) {
        if (document.body.scrollTop !== 0) {
            savedScrollPosition = document.body.scrollTop;
        }

        setBodyClass(nextProps.visible);
    }

    componentWillUnmount() {
        setBodyClass(false);
    }

    render(cn) {
        const { hasCloser, children, visible } = this.props;

        return (
            <PopupContainerProvider className={ cn({ visible }) } ref={ (el)=> { this.sidebar = el; }}>
                <div className={ cn('inner') }>
                    <header className={ cn('header') } >
                        {
                            hasCloser &&
                            <button
                                className={ cn('closer') }
                                onClick={ this.handleCloserClick }
                            >
                                <Icon
                                    icon='close'
                                    size='s'
                                />
                            </button>
                        }
                        {
                            this.props.action
                                ? this.renderAction(cn)
                                : null
                        }
                    </header>
                    <div className={ cn('content') }>
                        { children }
                    </div>
                    <footer className={ cn('footer') } />
                </div>
            </PopupContainerProvider>
        );
    }

    renderAction(cn) {
        return (
            <button
                className={ cn('action') }
                onClick={ this.props.action.onClickToAction }
            >
                <Label
                    className={ cn('label') }
                >
                    { this.props.action.text }
                </Label>
            </button>
        );
    }

    @autobind
    handleClickToAction() {
        if (this.props.action.onClickToAction) {
            this.props.action.onClickToAction();
        }
    }

    @autobind
    handleCloserClick() {
        if (this.props.onCloserClick) {
            document.body.scrollTop = savedScrollPosition;
            this.props.onCloserClick();
        }
    }

    @autobind
    animationEnd() {
        if (this.props.visible) {
            alert('visible');
        }
        else {
            alert('hidden');
        }
    }
}

export default Sidebar;
