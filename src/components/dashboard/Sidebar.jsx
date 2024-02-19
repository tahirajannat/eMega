import React, { useEffect, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ setActiveComponent }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [path, setPath] = useState();

    const handleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    };
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        setPath(pathname);
        console.log(pathname);
    }, [location.pathname]);
    console.log('path', path);
    return (
        <div>
            <main className='flex'>
                <div className='bg-gray-800  min-h-screen w-full   pt-4 transition-all'>
                    <div className='text-center text-white p-6'></div>
                    <ul className='mt-11 text-white'>
                        <li className='hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center '>
                            <Link to='/'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    {/* SVG path */}
                                </svg>
                                <span className='ml-3 hidden sm:block  text-white font-semibold tracking-wide hover:text-white transition-colors'>
                                    Dashboard
                                </span>
                            </Link>
                        </li>

                        <li className=''>
                            <button
                                className={` py-2 w-full text-left px-8 flex items-center gap-8 ${
                                    showDropdown && 'bg-primary'
                                }`}
                                onClick={handleDropdown}
                            >
                                Products
                                {showDropdown ? (
                                    <span className='inline-block'>
                                        <HiChevronUp className='text-2xl' />
                                    </span>
                                ) : (
                                    <span className='inline-block'>
                                        <HiChevronDown className='text-2xl' />
                                    </span>
                                )}
                            </button>
                            <ul
                                className={` text-sm  mb-6 ${
                                    !showDropdown ? 'hidden' : 'visible'
                                }`}
                            >
                                <li>
                                    <Link
                                        to='/dashboard/add-product'
                                        className={`block my-2 ml-8 px-4 ${
                                            location.pathname.includes(
                                                '/dashboard/add-product'
                                            )
                                                ? 'border-l-2 border-primary text-white'
                                                : ''
                                        }`}
                                    >
                                        Add New Product
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/dashboard/add-category'
                                        className={`block my-2 ml-8 px-4 ${
                                            location.pathname.includes(
                                                '/dashboard/add-category'
                                            )
                                                ? 'border-l-2 border-primary text-white'
                                                : ''
                                        }`}
                                    >
                                        Add New Category
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/dashboard/add-brand'
                                        className={`block my-2 ml-8 px-4 capitalize ${
                                            location.pathname.includes(
                                                '/dashboard/add-brand'
                                            )
                                                ? 'border-l-2 border-primary text-white capitalize'
                                                : ''
                                        }`}
                                    >
                                        Add New brand
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/dashboard/all-products'
                                        className={`block my-2 ml-8 px-4 ${
                                            location.pathname.includes(
                                                '/dashboard/all-products'
                                            )
                                                ? 'border-l-2 border-primary text-white'
                                                : ''
                                        }`}
                                    >
                                        All Products
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to='/dashboard/all-categories'
                                        className={`block my-2 ml-8 px-4 ${
                                            location.pathname.includes(
                                                '/dashboard/all-categories'
                                            )
                                                ? 'border-l-2 border-primary text-white'
                                                : ''
                                        }`}
                                    >
                                        All Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/dashboard/all-brands'
                                        className={`block my-2 ml-8 px-4 ${
                                            location.pathname.includes(
                                                '/dashboard/all-brands'
                                            )
                                                ? 'border-l-2 border-primary text-white'
                                                : ''
                                        }`}
                                    >
                                        All Brands
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='px-8'>
                            <Link to='/features' className='block py-2'>
                                Features
                            </Link>
                        </li>
                        <li className='px-8'>
                            <Link to='/download' className='block py-2'>
                                Download
                            </Link>
                        </li>
                        <li className='px-8'>
                            <Link to='/faq' className='block py-2'>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
