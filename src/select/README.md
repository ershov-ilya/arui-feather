Режим "radio"
```jsx
const options = [
    { value: '01', text: 'ИП Фридман М.М.' },
    { value: '02', text: 'ООО «Виктори»' },
    { value: '03', text: 'ФГУП НПП ВНИИЭМ' }
];
<div>
    {['s'].map(size => (
        <div className='row' >
            <div className='column'>
                <Select
                    size={ size }
                    mode='radio'
                    options={ options }
                />
            </div>
            <div className='column'>
                <Select
                    size={ size }
                    mode='radio'
                    options={ options }
                    disabled={ true }
                />
            </div>
        </div>
    ))}
</div>
```

Режим "check"
```jsx
const options = [
    { value: '01', text: 'ИП Фридман М.М.' },
    { value: '02', text: 'ООО «Виктори»' },
    { value: '03', text: 'ФГУП НПП ВНИИЭМ' }
];
<div>
    {['m'].map(size => (
        <div className='row' >
            <div className='column'>
                <Select
                    size={ size }
                    mode='check'
                    options={ options }
                />
            </div>
            <div className='column'>
                <Select
                    size={ size }
                    mode='check'
                    options={ options }
                    disabled={ true }
                />
            </div>
        </div>
    ))}
</div>
```

Режим "radio-check"
```jsx
const options = [
    { value: '01', text: 'ИП Фридман М.М.' },
    { value: '02', text: 'ООО «Виктори»' },
    { value: '03', text: 'ФГУП НПП ВНИИЭМ' }
];
<div>
    {['xl'].map(size => (
        <div className='row' >
            <div className='column'>
                <Select
                    size={ size }
                    mode='radio-check'
                    options={ options }
                />
            </div>
            <div className='column'>
                <Select
                    size={ size }
                    mode='radio-check'
                    options={ options }
                    disabled={ true }
                />
            </div>
        </div>
    ))}
</div>
```

Select с тянущейся шириной
```jsx
const options = [
    { value: '1', text: 'ФГУП НПП ВНИИЭМ им. Андроника Гевондовича Иосифьяна' },
    { value: '2', text: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу' },
    { value: '3', text: 'Федеральное государственное учреждение Ивановский научно-исследовательский институт материнства и детства имени Виктора Николаевича Городкова' },
    { value: '4', text: 'ООО «Брянсеметаллстройтехкомплект»' },
    { value: '5', text: 'ГОУ ДПО БелРИПКППС' },
    { value: '6', text: 'ООО «Абсолютная власть»' }
];
<div>
    {['l'].map(size => (
        <div className='row' >
            <div className='column'>
                <Select
                    width='available'
                    size={ size }
                    mode='check'
                    options={ options }
                />
            </div>
            <div className='column'>
                <Select
                    width='available'
                    size={ size }
                    mode='check'
                    options={ options }
                    disabled={ true }
                />
            </div>
        </div>
    ))}
</div>
```

Без фолбэка на нативный контрол на мобильном устройстве
```jsx
const options = [
    { value: '00', text: 'ИП Фридман М.М.' },
    { value: '01', text: 'ООО «Виктори»' },
    { value: '02', text: 'ФГУП НПП ВНИИЭМ' },
    { value: '03', text: 'ООО «Абсолютная власть»' },
    { value: '04', text: 'ГОУ ДПО БелРИПКППС' },
    { value: '05', text: 'ООО «Здравый смысл»' },
    { value: '06', text: 'ООО «Владимирский Централ»' },
    { value: '07', text: 'ЗАО «Вам и не снилось»' },
    { value: '08', text: 'ООО «Лучше наличными»' },
    { value: '09', text: 'ООО «Какие Люди»' },
    { value: '10', text: 'ООО «Ы»' },
    { value: '11', text: 'ООО «Ооо»' },
    { value: '12', text: 'ООО Банк «Прохладный»' },
    { value: '13', text: 'ООО «Хомячки»' },
    { value: '14', text: 'ИП Фридман М.М.' },
    { value: '16', text: 'ООО «Виктори»' },
    { value: '17', text: 'ФГУП НПП ВНИИЭМ' },
    { value: '18', text: 'ООО «Паньки»' },
    { value: '19', text: 'ЗАО «Хотя нет»' },
    { value: '20', text: 'ООО «Какой большой!»' },
    { value: '21', text: 'ООО «ДАА»' },
    { value: '22', text: 'ИП Фридман М.М.' },
    { value: '23', text: 'ООО «Какие Люди»' },
    { value: '24', text: 'ООО «Лучше наличными»' },
    { value: '25', text: 'ГОУ ДПО БелРИПКППС' },
    { value: '26', text: 'ООО Банк «Прохладный»' },
    { value: '27', text: 'ГОУ ДПО БелРИПКППС' },
    { value: '28', text: 'ЗАО «Вам и не снилось»' },
    { value: '29', text: 'ООО «Виктори»' },
    { value: '30', text: 'ФГУП НПП ВНИИЭМ' },
    { value: '31', text: 'ООО «Хомячки»' },
    { value: '32', text: 'ООО «Владимирский Централ»' },
    { value: '33', text: 'ООО «Какие Люди»' },
    { value: '34', text: 'ООО «Здравый смысл»' },
    { value: '35', text: 'ООО «Ооо»' }
];
<div>
    {['s', 'm', 'l', 'xl'].map(size => (
        <div className='row' >
            <div className='column'>
                <Select
                    size={ size }
                    mode='radio'
                    options={ options }
                    mobileMenuMode='popup'
                    mobileTitle='Очень длинный заголовок на мобильном устройстве'
                />
            </div>
            <div className='column'>
                <Select
                    size={ size }
                    mode='radio'
                    options={ options }
                    mobileMenuMode='popup'
                    disabled={ true }
                />
            </div>
        </div>
    ))}
</div>
```
