import React from 'react';
import { FaBagShopping } from 'react-icons/fa6';
import HeroProduct from '../../assets/image-product.png';
import Button from './Button';

export default function HeroBanner() {
    return (
        <div>
            <div className='container mx-auto px-20 grid grid-cols-12'>
                <div className='col-span-6 text-center flex items-center rounded-sm  lg:text-left'>
                    <div>
                        <h1 className='text-[50px] font-extralight text-black mb-8'>
                            Collections
                        </h1>
                        <p className='mt-1 mb-8 text-base font-thin  font-poppins w-3/4'>
                            you can explore ans shop many differnt collection
                            from various barands here.
                        </p>
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
                                icon={<FaBagShopping />}
                                // disabled={isLoading || isDisabled}
                            >
                                Shop now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 flex justify-end py-32'>
                    <img
                        src={HeroProduct}
                        alt=''
                        className='object-fit object-contain w-96  '
                    />
                </div>
            </div>
        </div>
    );
}
