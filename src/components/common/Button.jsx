export default function Button({
    children = '',
    onClick,
    icon,
    classes,
    buttonStyle = 'buttonPrimary button',
    classNames = [],
    iconPosition = 'after',
    style = {},
    addBgColor = true,
    type = 'button',
    disabled = false,
    onMouseLeave,
    onMouseEnter,
}) {
    const buttons = {
        buttonPrimary:
            'flex gap-3 items-center px-8 py-4 text-base  rounded-[0.1375rem] leading-4 ',
        buttonDisable:
            'px-4 py-1.5 2xl:py-2.5 2xl:py-2.5 text-[10px] xl:text-xs 2xl:text-[15px] rounded-[0.1375rem] leading-4 cursor-not-allowed bg-accent opacity-25 hover:opacity-25 hover:bg-accent !text-white ',

        buttonDefault:
            'rounded-[0.1375rem] px-4 py-1.5 2xl:py-2.5 text-[10px] xl:text-xs 2xl:text-[15px] text-gray-500 border border-[#EB8AA3] focus:outline-[#EB8AA3] ',
        buttonIcon:
            'w-full flex justify-center px-4 py-1.5 2xl:py-2.5 text-sm font-normal !shadow-none rounded-[0.1375rem] leading-4  ',
    };

    const getClassNames = (style) => {
        let classNamesArr = ['items-center shadow-sm font-medium  '];

        if (buttons[style]) {
            classNamesArr.push(buttons[style]);
        } else {
            classNamesArr.push(buttons['buttonPrimary']);
        }

        // Add background color and additional classNames if required
        if (addBgColor && style == 'buttonPrimary') {
            classNamesArr.push('bg-accent text-white hover:opacity-95 ');
        }

        // Add custom class names to the array
        classNamesArr.push(...classNames);

        return classNamesArr.join('');
    };

    return (
        <button
            className={getClassNames(buttonStyle) + classes}
            onClick={onClick}
            type={type}
            style={style}
            disabled={disabled}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {iconPosition === 'after' ? (
                <>
                    {children + ' '} <span>{icon}</span>
                </>
            ) : (
                <>
                    {' '}
                    <span>{icon}</span> {' ' + children}{' '}
                </>
            )}
        </button>
    );
}
