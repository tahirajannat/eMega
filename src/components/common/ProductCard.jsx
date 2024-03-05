import React from 'react';
import { Link } from 'react-router-dom';
import Ribbon from './Ribbon';

export default function ProductCard({ items, startIndx, endIndx }) {
    const sortedItems = [...items].sort((a, b) => {
        const dateA = new Date(a.updated_at.replace(/(at|am|pm)/g, '').trim());
        const dateB = new Date(b.updated_at.replace(/(at|am|pm)/g, '').trim());

        return dateB - dateA;
    });

    return (
        <>
            {sortedItems.slice(startIndx, endIndx).map((product) => (
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
                                        ? 'primary'
                                        : 'black'
                                }
                                textColor={'white'}
                            />
                        )}
                        <h2 className='text-base capitalize font-semibold py-4 hover:underline hover:text-teal-600 transition-all duration-300'>
                            <Link state={product} to={`/shop/${product.id}`}>
                                {/* <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                    Borrow
                                </button> */}
                                {product.product_name}
                            </Link>
                        </h2>
                        <div className='flex justify-between items-center '>
                            {product.category.map((cat) => (
                                <label className='text-gray-400 capitalize'>
                                    {cat.name}
                                </label>
                            ))}

                            {product.sale_price && product.sale_price > 0 ? (
                                <label className='text-primary font-normal'>
                                    <del className='mr-3 text-gray-400'>
                                        ${product.regular_price}
                                    </del>
                                    ${product.sale_price}
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
