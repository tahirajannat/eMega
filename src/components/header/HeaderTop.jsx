import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export default function HeaderTop() {
    let Links = [
        // { name: 'Home', link: '/' },
        // { name: 'About', link: '/' },
        // { name: 'Contact Us', link: '/' },
        // { name: 'Blog', link: '/' },
        {
            id: 1,
            name: <HiOutlineHeart className='text-2xl font-medium ' />,
            link: '',
        },
        {
            id: 2,
            name: (
                <HiOutlineShoppingCart className='text-2xl font-medium md:-ml-2' />
            ),
            link: '',
        },
        {
            id: 3,
            name: <FiUser className='text-[22px] font-medium md:-ml-2' />,
            link: '/my-account',
        },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full bg-white'>
            <div className='container mx-auto px-20 items-center  '>
                {/* <div
                    onClick={() => setOpen(!open)}
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div> */}
                <div className='border-b  md:grid grid-cols-3 items-center py-4 '>
                    <div className=' col-span-1 flex flex-1'>
                        <div className='w-full'>
                            {/* <label htmlFor='search' className='sr-only'>
                            Search
                        </label> */}
                            <div className='relative'>
                                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                                    <HiOutlineSearch
                                        className='h-5 w-5 text-primary font-thin'
                                        aria-hidden='true'
                                    />
                                </div>
                                <input
                                    id='search'
                                    name='search'
                                    className='block w-full  py-3 pl-7 text-base font-thin pr-3 bg-white text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
                                    placeholder='Search'
                                    type='search'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto '>
                        <img
                            src={Logo}
                            alt=''
                            className=' w-64 h-full object-contain block text-center'
                        />
                    </div>
                    <div className='text-right'>
                        <ul
                            className={`md:flex gap-7 md:items-right justify-end md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                                open ? 'top-20 ' : 'top-[-490px]'
                            }`}
                        >
                            {Links.map((link) => (
                                <li
                                    key={link.id}
                                    className='text-base font-medium md:my-0 my-7'
                                >
                                    <a
                                        href={link.link}
                                        className='text-primary  hover:text-pink-400 duration-500'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='text-right'>
                        <ul
                            className={`md:flex gap-7 md:items-right justify-end md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                                open ? 'top-20 ' : 'top-[-490px]'
                            }`}
                        >
                            {Links.map((link) => (
                                <li
                                    key={link.id}
                                    className='text-base font-medium md:my-0 my-7'
                                >
                                    <Link
                                        to={link.link} // Use Link instead of a tag for routing
                                        className='text-primary hover:text-pink-400 duration-500'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
