import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { firestore } from '../../firebase/index';
import Button from '../common/Button';

export default function AddBrand() {
    const productsRef = collection(firestore, 'brands');

    const [formData, setFormData] = useState({
        brand_name: '',
        brand_description: '',
        brand_slug: '',
    });

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        let slugValue;

        if (name === 'brand_name') {
            slugValue = value
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(slugValue && { brand_slug: slugValue }),
        }));
    };

    const handleSaveAndUpload = async (e) => {
        e.preventDefault();

        try {
            const newData = {
                brand_name: formData.brand_name,
                brand_description: formData.brand_description,
                brand_slug: formData.brand_slug,
            };
            setLoading(true);
            await addDoc(productsRef, newData);

            setFormData({
                brand_name: '',
                brand_description: '',
                brand_slug: '',
            });
        } catch (error) {
            console.error('Error adding brand:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=' p-6 mx-auto bg-gray-50 rounded-md shadow-md  '>
            <h1 className='text-xl font-bold text-black capitalize dark:text-black my-4'>
                Add New Brand
            </h1>

            <form className='mt-8'>
                <div>
                    {/* brand name  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='brand_name'
                        >
                            Brand Name
                        </label>
                        <input
                            id='brand_name'
                            type='text'
                            name='brand_name'
                            value={formData.brand_name}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>
                    {/* brand slug  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='brand_slug'
                        >
                            Brand slug
                        </label>
                        <input
                            id='brand_slug'
                            type='text'
                            name='brand_slug'
                            value={formData.brand_slug}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>

                    {/* brand description  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='brand_description'
                        >
                            brand Description
                        </label>
                        <textarea
                            id='brand_description'
                            name='brand_description'
                            value={formData.brand_description}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 h-52 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        ></textarea>
                    </div>
                </div>
                <div className='flex justify-end mt-6'>
                    <Button
                        onClick={handleSaveAndUpload}
                        buttonStyle='buttonPrimary'
                        iconPosition='after'
                        addBgColor={true}
                        classNames='!text-white border-b border-primary bg-primary w-auto flex-shrink-0'
                        classes='!px-5 py-[0.8rem] text-base'
                        icon={
                            <FaLocationArrow className='text-lg text-white !shadow-none' />
                        }
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
