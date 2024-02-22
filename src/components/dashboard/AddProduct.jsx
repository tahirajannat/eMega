import { Timestamp, addDoc, collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';

import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { firestore, storage } from '../../firebase/index';
import Button from '../common/Button';
import MultiSelect from '../common/MultiSelect';

export default function AddProduct() {
    const productsRef = collection(firestore, 'products');
    const [formData, setFormData] = useState({
        product_name: '',
        product_slug: '',
        category: '',
        product_brand: '',
        regular_price: '',
        sale_price: '',
        description: '',
        short_description: '',
        featured_image: '',
        stock_status: '',
        manage_stock: '',
        stock_quantity: '',
        badge_label: '',
        created_at: null,
        updated_at: null,
    });
    const [imageUpload, setImageUpload] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const categoriesRef = collection(firestore, 'categories');
    const brandsRef = collection(firestore, 'brands');
    const [allCategories, setAllCategories] = useState(null);
    const [allBrands, setAllBrands] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const categoryData = await getDocs(categoriesRef);
                const brandData = await getDocs(brandsRef);
                setAllCategories(
                    categoryData.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                );
                setAllBrands(
                    brandData.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                );
                console.log('allCategories', allCategories);
                console.log('allBrands', allBrands);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let slugValue;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'product_name') {
            slugValue = value
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(slugValue && { product_slug: slugValue }),
        }));
        console.log('slugValue', slugValue);
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
            const currentDate = new Date().toLocaleString(undefined, {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                hour12: true,
                minute: '2-digit',
            });

            const newData = {
                product_name: formData.product_name,
                product_slug: formData.product_slug,
                category: selectedCategory,
                product_brand: formData.product_brand,
                regular_price: formData.regular_price,
                sale_price:
                    formData.regular_price -
                    (formData.regular_price / 100) * formData.sale_price,
                description: formData.description,
                short_description: formData.short_description,
                featured_image: imageUrl,
                stock_status: formData.stock_status,
                manage_stock: formData.manage_stock,
                stock_quantity: formData.stock_quantity,
                badge_label: formData.badge_label,
                created_at: Timestamp.fromDate(new Date()),
                updated_at: currentDate,
            };
            setLoading(true);
            await addDoc(productsRef, newData);

            console.log('Product added successfully!');
            setFormData({
                product_name: '',
                product_slug: '',
                category: '',
                product_brand: '',
                regular_price: '',
                sale_price: '',
                description: '',
                short_description: '',
                featured_image: '',
                stock_status: '',
                manage_stock: '',
                stock_quantity: '',
                badge_label: '',
                created_at: null,
                updated_at: null,
            });

            setImageUpload(null);
        } catch (error) {
            console.error('Error uploading image or adding product:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleMultiSelecetChange = (values) => {
        setSelectedCategory(values);
        console.log(values);
    };

    return (
        <div>
            <section className=' p-6 mx-auto bg-gray-50 rounded-md shadow-md  '>
                <h1 className='text-xl font-bold text-black capitalize dark:text-black my-4'>
                    Add New Product
                </h1>
                <form className='grid grid-cols-12 gap-12'>
                    <div className='col-span-8'>
                        <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='product_name'
                            >
                                Product Title
                            </label>
                            <input
                                id='product_name'
                                type='text'
                                name='product_name'
                                value={formData.product_name}
                                onChange={handleChange}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>
                        {/* brand slug  */}
                        {formData.product_name && (
                            <div className='-mt-3 mb-4'>
                                <div className='hidden'>
                                    <label
                                        className='text-black my-6 capitalize'
                                        htmlFor='product_slug'
                                    >
                                        product slug
                                    </label>
                                    <input
                                        id='product_slug'
                                        type='text'
                                        name='product_slug'
                                        value={formData.product_slug}
                                        onChange={handleChange}
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                    />
                                </div>

                                <a className='text-sm underline text-blue-600 mb-6'>
                                    https://pink-lilies/product/
                                    {formData.product_slug}
                                </a>
                            </div>
                        )}
                        <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='description'
                            >
                                product description
                            </label>
                            <textarea
                                id='description'
                                name='description'
                                value={formData.description}
                                onChange={handleChange}
                                className='block w-full h-96 px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            ></textarea>
                        </div>
                        {/* product Short description  */}
                        <div className='my-4'>
                            <label
                                className='text-black my-6 capitalize'
                                htmlFor='short_description'
                            >
                                Product Short Description
                            </label>
                            <textarea
                                id='short_description'
                                name='short_description'
                                value={formData.short_description}
                                onChange={handleChange}
                                className='block w-full px-4 py-2 h-52 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            ></textarea>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='regular_price'
                            >
                                Price
                            </label>
                            <input
                                id='regular_price'
                                type='number'
                                name='regular_price'
                                value={formData.regular_price}
                                onChange={handleChange}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='sale_price'
                            >
                                Sell Percentage
                            </label>
                            <input
                                id='sale_price'
                                type='number'
                                name='sale_price'
                                value={formData.sale_price}
                                min={0}
                                max={100}
                                onChange={handleChange}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            />
                            <span className='text-xs'>
                                <span className='text-primary mr-1'>
                                    Total Sale amount:
                                </span>
                                $
                                {(formData.regular_price / 100) *
                                    formData.sale_price}
                            </span>
                        </div>
                        <div className='my-4'>
                            <label
                                className='text-black my-6 capitalize'
                                htmlFor='manage_stock'
                            >
                                manage Stock
                            </label>
                            <select
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                value={formData.manage_stock}
                                onChange={handleChange}
                                name='manage_stock'
                            >
                                <option value=''>Select Stock</option>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        </div>
                        {formData.manage_stock === 'yes' && (
                            <div className='my-4'>
                                <label
                                    className='text-black my-6 capitalize'
                                    htmlFor='stock_status'
                                >
                                    Stock Status
                                </label>
                                <select
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                    value={formData.stock_status}
                                    onChange={handleChange}
                                    name='stock_status' // Corrected name attribute
                                >
                                    <option value=''>
                                        Selcct Stock Status
                                    </option>
                                    <option value='inStock'>In Stock</option>
                                    <option value='outOfStock'>
                                        Out of Stock
                                    </option>
                                </select>
                            </div>
                        )}

                        {formData.stock_status === 'inStock' && (
                            <div className='my-4'>
                                <label
                                    className='text-black my-6 capitalize'
                                    htmlFor='stock_quantity'
                                >
                                    Stock quantity
                                </label>
                                <input
                                    id='stock_quantity' // Corrected id attribute
                                    type='number'
                                    name='stock_quantity'
                                    value={formData.stock_quantity}
                                    onChange={handleChange}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                />
                            </div>
                        )}
                        {/* <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='productCategory'
                            >
                                Product Category
                            </label>
                            <select
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                value={formData.category}
                                onChange={handleChange}
                                name='category' // Added name attribute
                            >
                                <option value=''>Select category</option>
                                {allCategories &&
                                    allCategories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.category_name}
                                        >
                                            {category.category_name}
                                        </option>
                                    ))}
                            </select>
                        </div> */}

                        {allCategories && (
                            <MultiSelect
                                onMultiSelect={handleMultiSelecetChange}
                                multiSelectOption={allCategories.map(
                                    (item) => ({
                                        id: item.id,
                                        name: item.category_name,
                                    })
                                )}
                            />
                        )}

                        <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='product_brand'
                            >
                                Product Brand
                            </label>
                            <select
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                value={formData.product_brand}
                                onChange={handleChange}
                                name='product_brand' // Added name attribute
                            >
                                <option value=''>Select brand</option>
                                {allBrands.map((brand) => (
                                    <option
                                        key={brand.id}
                                        value={brand.brand_name}
                                    >
                                        {brand.brand_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='my-4'>
                            <label
                                className='text-black my-6'
                                htmlFor='badge_label'
                            >
                                Product Label
                            </label>
                            <select
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                value={formData.badge_label}
                                onChange={handleChange}
                                name='badge_label' // Added name attribute
                            >
                                <option value='new'>New</option>
                                <option value='sale'>Sale</option>
                                <option value='hot'>Hot</option>
                                <option value='save'>
                                    save ${formData.sale_price}
                                </option>
                            </select>
                        </div>

                        <div className='mt-20 mb-6'>
                            <label className='block text-sm font-medium text-black'>
                                Product Image
                            </label>
                            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                                <div className='space-y-1 text-center'>
                                    {uploadedImageUrl ? (
                                        <div className='mx-auto'>
                                            <p>Image uploaded successfully!</p>
                                            <img
                                                src={uploadedImageUrl}
                                                alt='Uploaded'
                                                className='w-20 h-20 mx-auto'
                                            />
                                        </div>
                                    ) : (
                                        <svg
                                            className='mx-auto h-12 w-12 text-black'
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
                                    )}

                                    <div className='flex text-sm text-gray-600'>
                                        <label
                                            htmlFor='featured_image'
                                            className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                                        >
                                            <span className=''>
                                                Upload a file
                                            </span>
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
                                        <p className='pl-1 text-black'>
                                            or drag and drop
                                        </p>
                                    </div>
                                    <p className='text-xs text-black'>
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 flex justify-end mt-6'>
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
                            Add Product
                        </Button>
                    </div>
                </form>
            </section>
        </div>
    );
}
