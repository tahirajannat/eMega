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
                            <label className='text-gray-400 capitalize'>
                                {product.category}
                            </label>

                            {product.salePrice ? (
                                <label className='text-primary font-normal'>
                                    <del className='mr-3 text-gray-400'>
                                        $220.00
                                    </del>
                                    $130.00
                                </label>
                            ) : (
                                <label className='font-normal'>$130.00</label>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
