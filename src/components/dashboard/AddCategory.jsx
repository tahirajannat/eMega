import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { firestore } from '../../firebase/index';
import Button from '../common/Button';

export default function AddCategory() {
    const productsRef = collection(firestore, 'categories');

    const [formData, setFormData] = useState({
        category_name: '',
        category_description: '',
        category_slug: '',
    });

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        let slugValue;

        if (name === 'category_name') {
            slugValue = value
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(slugValue && { category_slug: slugValue }),
        }));
    };

    const handleSaveAndUpload = async (e) => {
        e.preventDefault();

        try {
            const newData = {
                category_name: formData.category_name,
                category_description: formData.category_description,
                category_slug: formData.category_slug,
            };
            setLoading(true);
            await addDoc(productsRef, newData);

            console.log('Category added successfully!');

            setFormData({
                category_name: '',
                category_description: '',
                category_slug: '',
            });
        } catch (error) {
            console.error('Error adding Category:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=' p-6 mx-auto bg-gray-50 rounded-md shadow-md  '>
            <h1 className='text-xl font-bold text-black capitalize dark:text-black my-4'>
                Add New Category
            </h1>

            <form className='mt-8'>
                <div>
                    {/* Category name  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='category_name'
                        >
                            Category Name
                        </label>
                        <input
                            id='category_name'
                            type='text'
                            name='category_name'
                            value={formData.category_name}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>
                    {/* Category slug  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='category_slug'
                        >
                            Category slug
                        </label>
                        <input
                            id='category_slug'
                            type='text'
                            name='category_slug'
                            value={formData.category_slug}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>

                    {/* Category description  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='category_description'
                        >
                            Category Description
                        </label>
                        <textarea
                            id='category_description'
                            name='category_description'
                            value={formData.category_description}
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
