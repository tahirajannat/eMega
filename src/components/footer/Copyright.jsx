import React from 'react';
import { FaArrowTurnUp } from 'react-icons/fa6';
import IconPayment from '../../assets/icons_payment.png';
import Button from '../common/Button';

const Copyright = () => {
    return (
        <div className='bg-gray-800 py-2'>
            <div className='container mx-auto px-20 grid grid-cols-3  '>
                <div className='flex justify-start items-center'>
                    <p className='text-base text-white'>
                        &copy; 2024 Pink Lilies , Inc.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={IconPayment} alt='' srcSet='' />
                </div>
                <div className='flex justify-end items-center'>
                    <Button
                        // onClick={handlePopupSave}
                        // buttonStyle={
                        //     isDisabled
                        //         ? 'buttonDisable'
                        //         : 'buttonPrimary'
                        // }
                        buttonStyle='buttonPrimary'
                        iconPosition={'after'}
                        addBgColor={false}
                        classNames={'text-white '}
                        classes={'!px-5 py-[0.8rem] text-base'}
                        icon={<FaArrowTurnUp className='text-lg ' />}
                        // disabled={isLoading || isDisabled}
                    >
                        Scroll To Top
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
