import React from 'react';
import Ribbon from './Ribbon';

export default function ProductCard({ items, startIndx, endIndx }) {
    return (
        <>
            {items.slice(startIndx, endIndx).map((product) => (
                <div key={product.id} className='relative col-span-1 my-4'>
                    <div>
                        <img
                            className='h-full w-full object-cover'
                            src={product.featured_image}
                            alt=''
                        />

                        {product.badge_label && (
                            <Ribbon
                                title={product.badge_label}
                                backgroundColor={
                                    product.badge_label === 'sale'
                                        ? 'black'
                                        : 'primary'
                                }
                                textColor={'white'}
                            />
                        )}
                        <h2 className='text-base capitalize font-semibold py-4 '>
                            {product.product_name}
                        </h2>
                        <div className='flex justify-between items-center '>
                            <label className='text-gray-400 capitalize'>
                                {product.category}
                            </label>

                            {product.sale_price ? (
                                <label className='text-primary font-normal'>
                                    <del className='mr-3 text-gray-400'>
                                        ${product.sale_price}
                                    </del>
                                    ${product.regular_price}
                                </label>
                            ) : (
                                <label className='font-normal'>
                                    ${product.regular_price}
                                </label>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
