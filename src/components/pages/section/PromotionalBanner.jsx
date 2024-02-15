import React from 'react';
import BannerPromotion from '../../../assets/promo-banner.png';
import PromoLogo from '../../../assets/promo-logo.png';
import Button from '../../common/Button';

export default function PromotionalBanner() {
    return (
        <div
            className='bg-cover bg-no-repeat w-full bg-center'
            style={{ backgroundImage: `url(${BannerPromotion})` }}
        >
            <div className='container mx-auto px-20 grid grid-cols-2 gap-4 place-items-center py-56'>
                <div className='col-span-1'></div>
                <div className='col-span-1'>
                    <img src={PromoLogo} alt='' />
                    <p className='text-white text-lg w-1/2 my-10 leading-loose'>
                        Lustrous yet understated. The new evening wear
                        collection exclusively offered at the reopened Giorgio
                        Armani boutique in Los Angeles.
                    </p>
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
                        classes={' text-base mt-10'}
                        // icon={<HiViewGridAdd className='text-lg ' />}
                        // disabled={isLoading || isDisabled}
                    >
                        See Collection
                    </Button>
                </div>
            </div>
        </div>
    );
}
