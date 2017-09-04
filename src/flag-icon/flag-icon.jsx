/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import Type from 'prop-types';

import cn from '../cn';
import performance from '../performance';

/**
 * Компонент флага в виде иконки.
 */
@cn('flag-icon')
@performance()
class FlagIcon extends React.Component {
    static propTypes = {
        /** Код страны (ISO2) */
        country: Type.string,
        /** Размер компонента */
        size: Type.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
        /** Дочерние элементы `Icon` */
        children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
        /** Тема компонента */
        theme: Type.oneOf(['alfa-on-color', 'alfa-on-white', 'alfa-on-colored']),
        /** Дополнительный класс */
        className: Type.oneOfType([Type.func, Type.string])
    };

    static defaultProps = {
        size: 'm'
    };

    render(cn) {
        let mods = {
            country: this.props.country,
            size: this.props.size
        };

        return (
            <span className={ cn(mods) } />
        );
    }
}

export default FlagIcon;
