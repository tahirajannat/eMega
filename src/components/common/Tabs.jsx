import React from 'react';
import { HiViewGridAdd } from 'react-icons/hi';
import Button from './Button';

const Tabs = ({ active, onChange, children }) => {
    const tabs = React.Children.toArray(children);

    return (
        <>
            <div className='pb-2 flex justify-between'>
                <div>
                    {tabs.map((tab, index) => (
                        <a
                            key={index}
                            onClick={() => onChange(index)}
                            className={
                                active === index
                                    ? 'border-b-2 border-primary py-3 mb-4 mr-6'
                                    : 'mr-6 inline cursor-pointer'
                            }
                            style={{
                                width: 100,
                            }}
                        >
                            {tab.props.title}
                        </a>
                    ))}
                </div>
                <div>
                    <Button
                        buttonStyle='buttonPrimary'
                        iconPosition={'before'}
                        addBgColor={true}
                        classNames={'!wm-text-white bg-primary '}
                        classes={'!px-5 py-[0.8rem] text-base'}
                        icon={<HiViewGridAdd className='text-lg ' />}
                    >
                        View All
                    </Button>
                </div>
            </div>
            <div className='px-'>{tabs[active]}</div>
        </>
    );
};

export default Tabs;
