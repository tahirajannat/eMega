import { addDoc, collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
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
export default function AddProductCopy() {
    const productsRef = collection(firestore, 'products');
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        product_name: '',
        slug: '',
        regular_price: '',
        sale_price: '',
        stock_quantity: '',
        manage_stock: '',
        stock_status: '',
        manage_stock: '',
        // categories: [],
        featured_image: '',
        short_description: '',
        description: '',
        // reviews: [{}],
        created_at: '',
        updated_at: '',
    });

    const [imageUpload, setImageUpload] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const categoriesCollection = collection(firestore, 'categories');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(categoriesCollection);
                const fetchedCategories = [];

                querySnapshot.forEach((doc) => {
                    const categoryData = doc.data();
                    fetchedCategories.push({
                        id: doc.id,
                        name: categoryData.category_name,
                    });
                });

                setCategories(fetchedCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, [categoriesCollection]); // Removed 'categories' from the dependency array

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // e.target.reset();
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
            await uploadBytes(storageRef, imageUpload);
            const imageUrl = await getDownloadURL(storageRef);
            setUploadedImageUrl(imageUrl);

            // Save data
            const newData = {
                product_name: formData.product_name,
                slug: formData.slug,
                regular_price: formData.regular_price,
                sale_price: formData.sale_price,
                stock_quantity: formData.stock_quantity,
                manage_stock: formData.manage_stock,
                stock_status: formData.stock_quantity,
                categories: [formData.categories],
                featured_image: imageUrl,
                short_description: formData.short_description,
                description: formData.description,
                reviews: [{}],
                created_at: formData.created_at,
                updated_at: formData.updated_at,
            };
            setLoading(true);
            // Save data to the 'products' collection
            await addDoc(productsRef, newData);

            console.log('Product added successfully!');
            formRef.current.reset();

            setFormData({
                product_name: '',
                slug: '',
                regular_price: '',
                sale_price: '',
                stock_quantity: '',
                manage_stock: '',
                stock_status: '',
                manage_stock: '',
                // categories: [],
                featured_image: '',
                short_description: '',
                description: '',
                // reviews: [{}],
                created_at: '',
                updated_at: '',
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

    const [selectedValues, setSelectedValues] = useState([]);

    const handleMultiSelect = (selected) => {
        setSelectedValues(selected);
        setFormData((prevData) => ({
            ...prevData,
            categories: categories,
        }));
    };

    // useEffect(() => {
    //     console.log('Selected values:', selectedValues);
    // }, [selectedValues]);

    // console.log('first formdata values:', formData);

    return (
        <div>
            <section className=' p-6 mx-auto bg-gray-50 rounded-md shadow-md  '>
                <h1 className='text-xl font-bold text-black capitalize dark:text-black my-4'>
                    Add New Product
                </h1>

                <form className='mt-8' ref={formRef}>
                    <div className='grid grid-cols-12 gap-12'>
                        <div className='col-span-8'>
                            <div>
                                {/* product title  */}
                                <div className='my-4'>
                                    <label
                                        className='text-black my-6 capitalize'
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
                                {/* product description  */}
                                <div className='my-4'>
                                    <label
                                        className='text-black my-6 capitalize'
                                        htmlFor='description'
                                    >
                                        Product Description
                                    </label>
                                    <textarea
                                        id='description'
                                        name='description'
                                        value={formData.description}
                                        onChange={handleChange}
                                        className='block w-full px-4 py-2 h-96 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                    ></textarea>
                                </div>
                                {/* product description  */}
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
                        </div>
                        <div className=' col-span-4'>
                            {/* Product Category  */}
                            <div className='my-4'>
                                <label
                                    className='text-black my-6 capitalize'
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
                                    className='text-black my-6 capitalize'
                                    htmlFor='sale_price'
                                >
                                    Sell Percentage
                                </label>
                                <input
                                    id='sale_price'
                                    type='number'
                                    name='sale_price'
                                    value={formData.sale_price}
                                    onChange={handleChange}
                                    min={0}
                                    max={100}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-200 dark:text-gray-500 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                                />
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
                                    name='manage_stock' // Corrected name attribute
                                >
                                    <option value=''>Selcct Stock</option>
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
                                        <option value=''>Selcct Stock</option>
                                        <option value='inStock'>
                                            In Stock
                                        </option>
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
                                    className='text-black my-6 capitalize'
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
                                    {categories.map((category) => (
                                        <option value={category.category_name}>
                                            {category.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div> */}
                            {/* <div>
                                <MultiSelect
                                    multiSelectLabel={'Product Category'}
                                    multiSelectOption={categories}
                                    value={formData.categories}
                                    onMultiSelect={handleMultiSelect}
                                />

                                <div>
                                    Selected Values:{' '}
                                    {JSON.stringify(selectedValues)}
                                </div>
                            </div> */}

                            <div className='my-4'>
                                <label className='block text-sm font-medium text-black'>
                                    Product Image
                                </label>
                                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                                    <div className='space-y-1 text-center'>
                                        {uploadedImageUrl ? (
                                            <div className='mx-auto'>
                                                <p>
                                                    Image uploaded successfully!
                                                </p>
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
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
