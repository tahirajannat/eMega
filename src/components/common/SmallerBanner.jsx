import React from 'react';
import MacPro from '../../assets/MacBook Pro 14.png';
import Product1 from '../../assets/PlayStation.png';
import AirPods from '../../assets/hero__gnfk5g59t0qe_xlarge_2x 1.png';
import VisionPro from '../../assets/image 36.png';

export default function SmallerBanner() {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <div className='grid grid-cols-3 items-center align-middle '>
                        <div className='col-span-1'>
                            <img
                                src={Product1}
                                alt=''
                                className='object-cover h-full  '
                            />
                        </div>
                        <div className='col-span-2'>
                            <h1 className='text-[32px] font-medium text-black'>
                                Playstation 5
                            </h1>
                            <p className='mt-1 text-base text-[#909090] font-thin  font-poppins'>
                                Incredibly powerful CPUs, GPUs, and an SSD with
                                integrated I/O will redefine your PlayStation
                                experience.e
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-1 grid grid-cols-3 bg-[#EDEDED] items-center align-middle'>
                            <div className='col-span-1'>
                                <img
                                    src={AirPods}
                                    alt=''
                                    className='object-cover h-full  '
                                />
                            </div>
                            <div className='col-span-2 items-center align-middle'>
                                <h1 className='text-[28px] font-extralight text-black'>
                                    Apple AirPods
                                    <span className='font-medium font-poppins'>
                                        {' '}
                                        Max
                                    </span>
                                </h1>
                                <p className='mt-1 text-sm text-gray-700 font-light  font-poppins'>
                                    Incredibly powerful CPUs, GPUs, and an SSD
                                    with integrated I/O will redefine your
                                    PlayStation experience.e
                                </p>
                            </div>
                        </div>
                        <div className='col-span-1 grid grid-cols-3 bg-[#353535] items-center align-middle'>
                            <div className='col-span-1'>
                                <img
                                    src={VisionPro}
                                    alt=''
                                    className='object-cover h-full  '
                                />
                            </div>
                            <div className='col-span-2 items-center align-middle'>
                                <h1 className='text-[28px] font-extralight text-white'>
                                    Apple Vision
                                    <span className='font-medium font-poppins'>
                                        {' '}
                                        Pro
                                    </span>
                                </h1>
                                <p className='mt-1 text-sm text-gray-500 font-light  font-poppins'>
                                    Incredibly powerful CPUs, GPUs, and an SSD
                                    with integrated I/O will redefine your
                                    PlayStation experience.e
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='col-span-1'>
                        <div className='grid grid-cols-3 items-center align-middle '>
                            <div className='col-span-2 items-center align-middle'>
                                <h1 className='text-[28px] font-extralight text-black'>
                                    Macbook
                                    <span className='font-medium font-poppins'>
                                        Air
                                    </span>
                                </h1>
                                <p className='mt-1 text-sm text-gray-700 font-light  font-poppins'>
                                    Incredibly powerful CPUs, GPUs, and an SSD
                                    with integrated I/O will redefine your
                                    PlayStation experience.e
                                </p>
                                <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
                                    <a
                                        rel='noopener noreferrer'
                                        href='#'
                                        className='px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100'
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                            <div className='col-span-1 text-[-webkit-right]'>
                                <img
                                    src={MacPro}
                                    alt=''
                                    className='object-cover h-full  '
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
