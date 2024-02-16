import React from 'react';

export default function FooterMenu({ menuItems }) {
    return (
        <>
            {menuItems.map((item) => (
                <div key={item.title}>
                    <p className='font-medium text-gray-900 capitalize'>
                        {item.title}
                    </p>

                    <ul className='mt-6 space-y-4 text-sm'>
                        {item.items.map((menuItem) => (
                            <li key={menuItem.id}>
                                <a
                                    href='#'
                                    className='text-gray-700 transition hover:opacity-75 capitalize'
                                >
                                    {menuItem.menu}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}
