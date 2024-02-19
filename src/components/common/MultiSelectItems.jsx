export default function MultiSelectItems({
    item,
    isSelected,
    onToggle,
    classNames,
}) {
    return (
        <span
            className={classNames(
                'inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium',
                isSelected && 'bg-indigo-200'
            )}
        >
            {item.name}
            <button
                type='button'
                className='ml-1.5 inline-flex text-indigo-500 focus:outline-none focus:text-indigo-700'
                onClick={() => onToggle(item)}
            >
                <span className='sr-only'>Remove large option</span>
                <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    role='img'
                    aria-hidden='true'
                >
                    <path
                        fillRule='evenodd'
                        d='M14.293 5.293a1 1 0 00-1.414 0L10 8.586 6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z'
                        clipRule='evenodd'
                    ></path>
                </svg>
            </button>
        </span>
    );
}
