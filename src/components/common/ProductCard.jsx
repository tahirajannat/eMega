import React from 'react';
import Ribbon from './Ribbon';

export default function ProductCard({ items }) {
    return (
        <>
            {items.map((product) => (
                <div key={product.id} className='relative col-span-1 my-4'>
                    <div>
                        <img
                            className='h-full w-full object-cover'
                            src={product.src}
                            alt=''
                            srcset=''
                        />

                        {product.ribonTitle && (
                            <Ribbon
                                title={product.ribonTitle}
                                backgroundColor={
                                    product.ribonTitle === 'sale'
                                        ? 'black'
                                        : 'primary'
                                }
                                textColor={'white'}
                            />
                        )}
                        <h2 className='text-base capitalize font-semibold py-4 '>
                            Nike Sportswear Futura Luxe
                        </h2>
                        <div className='flex justify-between items-center '>
                            <lavel className='text-gray-400 capitalize'>
                                {product.category}
                            </lavel>

                            {product.salePrice ? (
                                <lavel className='text-primary font-normal'>
                                    <del className='mr-3 text-gray-400'>
                                        $220.00
                                    </del>
                                    $130.00
                                </lavel>
                            ) : (
                                <lavel className='font-normal'>$130.00</lavel>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
