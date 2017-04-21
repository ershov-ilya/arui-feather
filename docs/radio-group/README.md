# RadioGroup

Компонент группы радио-кнопок.

```javascript
import RadioGroup from 'arui-feather/radio-group';
```

## Примеры


```
import 'Radio' from 'arui-feather/radio';
import 'RadioGroup' from 'arui-feather/radio-group';

// Вертикальная группа радио кнопок
<RadioGroup>
   <Radio text="Кнопка раз" />
   <Radio text="Кнопка два" />
   <Radio text="Кнопка три" />
</RadioGroup>

// Горизонтальная группа радио кнопок, состоящая из обычных кнопок
<RadioGroup type="button">
   <Radio type="button" text="Кнопка раз" />
   <Radio type="button" text="Кнопка два" />
   <Radio type="button" text="Кнопка три" />
</RadioGroup>

// Горизонтальная группа радио кнопок
<RadioGroup type="line">
   <Radio text="Кнопка раз" />
   <Radio text="Кнопка два" />
   <Radio text="Кнопка три" />
</RadioGroup>
```



## Props


| Prop  | Тип  | По-умолчанию | Обязательный | Описание |
| ----- | ---- | ------------ | ------------ |----------|
| type | [TypeEnum](#TypeEnum) | `'normal'`  |  | Тип группы кнопок |
| value | String |  |  | Значение выбранной радио-кнопки |
| error | Node |  |  | Отображение попапа с ошибкой в момент когда фокус находится на компоненте |
| errorDirections | Array.<String> | `['right-center', 'right-top', 'right-bottom', 'bottom-left']`  |  | Расположение попапа с ошибкой (в порядке приоритета) относительно точки открытия |
| width | [WidthEnum](#WidthEnum) |  |  | Управление шириной группы кнопок для типа 'button'. При значении 'available' растягивает группу на ширину родителя |
| name | String |  |  | Уникальное имя блока |
| children | Array.<Node>\|Node |  |  | Дочерние элементы `RadioGroup`, как правило, компоненты `Radio` |
| theme | [ThemeEnum](#ThemeEnum) |  |  | Тема компонента |
| className | Function\|String |  |  | Дополнительный класс |
| onFocus | Function |  |  | Обработчик фокуса радиогруппы |
| onBlur | Function |  |  | Обработчик снятия фокуса с радиогруппы |
| onChange | Function |  |  | Обработчик изменения значения 'checked' одного из дочерних радио-кнопок |





## Публичные методы
| Метод  | Описание |
| ------ | -------- |
| focus() | Устанавливает фокус на первую радиокнопку в группе. |
| blur() | Убирает фокус с группы радио-кнопок. |





## Типы






### <a id="TypeEnum"></a>TypeEnum

 * `'normal'`
 * `'button'`
 * `'line'`


### <a id="WidthEnum"></a>WidthEnum

 * `'default'`
 * `'available'`


### <a id="ThemeEnum"></a>ThemeEnum

 * `'alfa-on-color'`
 * `'alfa-on-white'`


