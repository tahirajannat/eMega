import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import { firestore, storage } from '../../firebase/index';
import Button from '../common/Button';

export default function AddProductImage() {
    const productsRef = collection(firestore, 'products');

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        salePrice: '',
        description: '',
        src: '',
    });

    const [imageUpload, setImageUpload] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        e.target.reset();
    };

    const handleFileSelect = (event) => {
        setImageUpload(event.target.files[0]);
    };

    const handleSaveAndUpload = async (e) => {
        e.preventDefault();

        if (!imageUpload) {
            console.log('Please select an image');
            return;
        }

        const storageRef = ref(storage, 'products/' + uuid());

        try {
            // Upload image
            await uploadBytes(storageRef, imageUpload);
            const imageUrl = await getDownloadURL(storageRef);
            setUploadedImageUrl(imageUrl);

            // Save data
            const newData = {
                title: formData.title,
                category: formData.category,
                price: formData.price,
                salePrice: formData.salePrice,
                description: formData.description,
                src: imageUrl,
            };
            setLoading(true);
            // Save data to the 'products' collection
            await addDoc(productsRef, newData);

            console.log('Product added successfully!');
            // Reset form data
            setFormData({
                title: '',
                category: '',
                price: '',
                salePrice: '',
                description: '',
                src: '',
            });

            // Clear the input field for file
            setImageUpload(null);
        } catch (error) {
            console.error('Error uploading image or adding product:', error);
            // Call your error handling function here (e.g., toastifyError)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4'></div>
            <div className='col-span-8 p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20'>
                <h1 className='text-xl font-bold text-white capitalize dark:text-white my-4'>
                    Add New Product
                </h1>

                <form>
                    <div>
                        <label
                            className='text-white dark:text-gray-200'
                            htmlFor='productTitle'
                        >
                            Product Title
                        </label>
                        <input
                            id='productTitle'
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>

                    <div>
                        <label
                            className='text-white dark:text-gray-200'
                            htmlFor='productCategory'
                        >
                            Product Category
                        </label>
                        <select
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            value={formData.category}
                            onChange={handleChange}
                            name='category' // Added name attribute
                        >
                            <option value='Dress'>Dress</option>
                            <option value='Shirts'>Shirts</option>
                            <option value='Pants'>Pants</option>
                            <option value='Jackets'>Jackets</option>
                            <option value='Jewelry & Accessories'>
                                Jewelry & Accessories
                            </option>
                            <option value='living'>living</option>
                        </select>
                    </div>

                    <div>
                        <label
                            className='text-white dark:text-gray-200'
                            htmlFor='productPrice'
                        >
                            Price
                        </label>
                        <input
                            id='productPrice'
                            type='number'
                            name='price'
                            value={formData.price}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>
                    <div>
                        <label
                            className='text-white dark:text-gray-200'
                            htmlFor='productSalePrice'
                        >
                            Sell Price
                        </label>
                        <input
                            id='productSalePrice'
                            type='number'
                            name='salePrice'
                            value={formData.salePrice}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>

                    <div>
                        <label
                            className='text-white dark:text-gray-200'
                            htmlFor='productDescription'
                        >
                            Text Area
                        </label>
                        <textarea
                            id='productDescription'
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        ></textarea>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-white'>
                            Product Image
                        </label>
                        <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                            <div className='space-y-1 text-center'>
                                <svg
                                    className='mx-auto h-12 w-12 text-white'
                                    stroke='currentColor'
                                    fill='none'
                                    viewBox='0 0 48 48'
                                    aria-hidden='true'
                                >
                                    <path
                                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <div className='flex text-sm text-gray-600'>
                                    <label
                                        htmlFor='src'
                                        className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                                    >
                                        <span className=''>Upload a file</span>
                                        <input
                                            label='Image'
                                            placeholder='Choose image'
                                            accept='image/png,image/jpeg'
                                            type='file'
                                            onChange={(e) =>
                                                setImageUpload(
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        {/* <button
                                            type='button'
                                            onClick={handleUpload}
                                        >
                                            Upload to Firebase
                                        </button> */}
                                    </label>
                                    <p className='pl-1 text-white'>
                                        or drag and drop
                                    </p>
                                </div>
                                <p className='text-xs text-white'>
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
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
        </div>
    );
}
