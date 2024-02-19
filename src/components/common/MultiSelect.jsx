import React, { useEffect, useState } from 'react';
import { HiOutlineChevronUpDown } from 'react-icons/hi2';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function MultiSelect({
    multiSelectLabel,
    multiSelectOption,
    onMultiSelect,
}) {
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((show) => !show);
    };

    const toggleSelection = (item) => {
        if (selected.some((selectedItem) => selectedItem.name === item.name)) {
            setSelected(
                selected.filter(
                    (selectedItem) => selectedItem.name !== item.name
                )
            );
        } else {
            setSelected([...selected, item]);
        }
    };

    // Call onMultiSelect callback whenever selection changes
    useEffect(() => {
        onMultiSelect(selected);
    }, [selected, onMultiSelect]);

    return (
        <div>
            <label
                id='listbox-label'
                className='block text-black my-6 capitalize font-medium leading-6 '
            >
                {multiSelectLabel}
            </label>
            <div className='relative mt-2'>
                <div
                    className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onClick={handleOpen}
                >
                    {selected.length === 0 && <span> Select Options</span>}
                    <div className='flex flex-wrap'>
                        {selected.map((item) => (
                            <span
                                key={item.id}
                                className='inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 mr-1 mb-1'
                            >
                                {item.name}
                                <button
                                    type='button'
                                    className='ml-1.5 inline-flex text-indigo-500 focus:outline-none focus:text-indigo-700'
                                    onClick={() => toggleSelection(item)}
                                >
                                    <span className='sr-only'>
                                        Remove large option
                                    </span>
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
                        ))}
                    </div>
                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                        <HiOutlineChevronUpDown />
                    </span>
                </div>
                {open && (
                    <ul
                        className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                        tabIndex='-1'
                        role='listbox'
                        aria-labelledby='listbox-label'
                        aria-activedescendant='listbox-option-3'
                    >
                        {multiSelectOption.map((item) => (
                            <li
                                key={item.id}
                                className={classNames(
                                    'text-gray-900 relative cursor-default select-none py-2 pl-8 pr-4',
                                    selected.some(
                                        (selectedItem) =>
                                            selectedItem.id === item.id
                                    ) && 'bg-indigo-200'
                                )}
                                id={`listbox-option-${item.id}`}
                                role='option'
                                onClick={() => toggleSelection(item)}
                                value={item}
                            >
                                <span className='font-normal block truncate'>
                                    {item.name}
                                </span>
                                {selected.some(
                                    (selectedItem) =>
                                        selectedItem.id === item.id
                                ) && (
                                    <span className='text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5'>
                                        <svg
                                            className='h-5 w-5'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                                                clipRule='evenodd'
                                            ></path>
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
