import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import { firestore, storage } from '../../firebase/index';
import Button from '../common/Button';
const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
];
export default function AddBrand() {
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
                description: formData.description,
                category: formData.category,
                brand: formData.brand,
                price: formData.price,
                salePrice: formData.salePrice,
                discountPercentage: formData.discountPercentage,
                stock: formData.stock,
                image: formData.imageUrl,
                deal: formData.deal,
                stockStatus: formData.stockStatus,
                createdAt: formData.createdAt,
                updatedAt: formData.updatedAt,
            };
            setLoading(true);
            // Save data to the 'products' collection
            await addDoc(productsRef, newData);

            console.log('Product added successfully!');
            // Reset form data
            // setFormData({
            //     title: '',
            //     category: '',
            //     price: '',
            //     salePrice: '',
            //     description: '',
            //     src: '',
            // });
            setFormData({
                // id: '',
                title: '',
                description: '',
                category: '',
                brand: '',
                price: '',
                discountPercentage: '',
                stock: '',
                image: '',

                deal: '',
                status: {
                    bestSeller: '',
                    newArrival: '',
                },
                createdAt: '',
                updatedAt: '',
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
                            htmlFor='productTitle'
                        >
                            Brand Name
                        </label>
                        <input
                            id='productTitle'
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>
                    {/* brand slug  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='productTitle'
                        >
                            Brand slug
                        </label>
                        <input
                            id='productTitle'
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        />
                    </div>

                    {/* brand description  */}
                    <div className='my-4'>
                        <label
                            className='text-black my-6 capitalize'
                            htmlFor='productDescription'
                        >
                            brand Description
                        </label>
                        <textarea
                            id='productDescription'
                            name='description'
                            value={formData.description}
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
