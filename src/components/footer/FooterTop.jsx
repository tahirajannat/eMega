import React from 'react';
import Logo from '../../assets/logo.png';
import FooterMenu from './FooterMenu';
import Social from '../common/Social';

export default function FooterTop() {
    const footerMenu = [
        {
            title: 'catalog',
            items: [
                {
                    id: 1,
                    menu: 'Necklaces',
                },
                {
                    id: 2,
                    menu: 'hoodies',
                },
                {
                    id: 3,
                    menu: 'Jewelry Box',
                },
                {
                    id: 4,
                    menu: 't-shirt',
                },
                {
                    id: 5,
                    menu: 'jacket',
                },
            ],
        },
        {
            title: 'about us',
            items: [
                {
                    id: 1,
                    menu: 'Our Producers',
                },
                {
                    id: 2,
                    menu: 'Sitemap',
                },
                {
                    id: 3,
                    menu: 'FAQ',
                },
                {
                    id: 4,
                    menu: 'About Us',
                },
                {
                    id: 5,
                    menu: 'Terms & Conditions',
                },
            ],
        },
        {
            title: ' customer services',
            items: [
                {
                    id: 1,
                    menu: 'Contact Us',
                },
                {
                    id: 2,
                    menu: 'Track Your Order',
                },
                {
                    id: 3,
                    menu: 'Product Care & Repair',
                },
                {
                    id: 4,
                    menu: 'Book an Appointment',
                },
                {
                    id: 5,
                    menu: 'Shipping & Returns',
                },
            ],
        },
    ];

    return (
        <div>
            <footer class='bg-white'>
                <div class=' container mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-20'>
                    <div class='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                        <div>
                            <div class='text-teal-600'>
                                <img
                                    src={Logo}
                                    alt=''
                                    srcset=''
                                    className='w-60'
                                />
                            </div>

                            <p class='mt-4 max-w-xs text-gray-500'>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Esse non cupiditate quae nam
                                molestias.
                            </p>

                            <Social />
                        </div>

                        <div class='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3'>
                            <FooterMenu menuItems={footerMenu} />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
