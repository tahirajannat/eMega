import React from 'react';
import { HiViewGridAdd } from 'react-icons/hi';
import Button from './Button';

export default function Tabs({ active, onChange, children }) {
    return (
        <>
            <div className='pb-2 flex justify-between'>
                <div>
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

                <div>
                    <Button
                        // onClick={handlePopupSave}
                        // buttonStyle={
                        //     isDisabled
                        //         ? 'buttonDisable'
                        //         : 'buttonPrimary'
                        // }
                        buttonStyle='buttonPrimary'
                        iconPosition={'before'}
                        addBgColor={true}
                        classNames={'!wm-text-white bg-primary '}
                        classes={'!px-5 py-[0.8rem] text-base'}
                        icon={<HiViewGridAdd className='text-lg ' />}
                        // disabled={isLoading || isDisabled}
                    >
                        View All
                    </Button>
                </div>
            </div>

            <div className='px-'>{children[active]}</div>
        </>
    );
}
