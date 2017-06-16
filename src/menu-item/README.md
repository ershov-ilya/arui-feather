```
const layoutStyle = {
    paddingRight: '10px'
};
<div>
    {['', 'dropdown', 'block'].map(type => (
        <div key={ type }>
            {['s', 'm', 'l', 'xl'].map(size => (
                <span style={ layoutStyle }>
                    <MenuItem {...{
                        size,
                        type,
                        popup: 'Popup content'
                    }}>
                        {type ? `${type} ` : ''}menu item
                    </MenuItem>
                </span>
            ))}
        </div>
    ))}
</div>
```