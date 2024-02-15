import React from 'react';

export default function Tabs({ active, onChange, children }) {
    return (
        <>
            <div className='pb-2'>
                {children.map((menu, index) => (
                    <a
                        key={index}
                        onClick={() => onChange(index)}
                        className={
                            active === index
                                ? 'border-b-2 border-primary py-3 mb-4 mr-6'
                                : 'mr-6 inline  cursor-pointer'
                        }
                        style={{
                            width: 100,
                        }}
                    >
                        {menu.props.title}
                    </a>
                ))}
            </div>
            <div className=' sm:h-80'>{children[active]}</div>
        </>
    );
}
