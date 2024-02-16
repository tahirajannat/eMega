import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

import { FaGithub } from 'react-icons/fa6';

const Social = () => {
    return (
        <div>
            {' '}
            <ul className='mt-8 flex gap-6'>
                <li>
                    <a
                        href='#'
                        rel='noreferrer'
                        target='_blank'
                        className='text-primary transition hover:opacity-75'
                    >
                        <span className='sr-only'>Facebook</span>

                        <FaFacebookF className='text-lg' />
                    </a>
                </li>

                <li>
                    <a
                        href='#'
                        rel='noreferrer'
                        target='_blank'
                        className='text-primary transition hover:opacity-75'
                    >
                        <span className='sr-only'>Instagram</span>

                        <FaInstagram className='text-lg' />
                    </a>
                </li>

                <li>
                    <a
                        href='#'
                        rel='noreferrer'
                        target='_blank'
                        className='text-primary transition hover:opacity-75'
                    >
                        <span className='sr-only'>Twitter</span>
                        <FaTwitter className='text-lg' />
                    </a>
                </li>
                <li>
                    <a
                        href='#'
                        rel='noreferrer'
                        target='_blank'
                        className='text-primary transition hover:opacity-75'
                    >
                        <span className='sr-only'>Linkedin</span>

                        <FaLinkedinIn className='text-lg' />
                    </a>
                </li>

                <li>
                    <a
                        href='#'
                        rel='noreferrer'
                        target='_blank'
                        className='text-primary transition hover:opacity-75'
                    >
                        <span className='sr-only'>GitHub</span>

                        <FaGithub className='text-lg' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;
