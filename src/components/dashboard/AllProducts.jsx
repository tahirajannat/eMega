import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { HiTrash } from 'react-icons/hi';
import { firestore } from '.././../firebase/index';
import SkeletonLoader from '../common/SkeletonLoader';
const AllProducts = () => {
    const productsRef = collection(firestore, 'products');
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);

                // Simulate a delay of 5 seconds before fetching the data
                setTimeout(async () => {
                    const productData = await getDocs(productsRef);
                    setAllData(
                        productData.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    );
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        getData();
    }, []);
    const handleDelete = async (itemId) => {
        try {
            setTimeout(() => {
                setLoading(true);
            }, 5000);

            const itemDocRef = doc(collection(firestore, 'products'), itemId);

            await deleteDoc(itemDocRef);
            console.log('Document successfully deleted!');
            const productData = await getDocs(productsRef);
            setAllData(
                productData.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            );
        } catch (error) {
            console.error('Error deleting document: ', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div class='w-full  bg-gray-50 my-10'>
            <div class=' mx-auto sm:px-4 lg:px-8'>
                <div class='flex flex-col'>
                    <div class='mb-4'>
                        <h1 class='text-3xl font-bolder leading-tight text-gray-900'>
                            All Products
                        </h1>
                    </div>
                    <div class='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
                        <div class='flex items-center py-2'>
                            <input
                                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                id='inline-searcg'
                                type='text'
                                placeholder='Search'
                            />
                        </div>
                        <div class='flex items-center py-2'>
                            <a
                                href=''
                                class='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:shadow-outline'
                            >
                                Create new page
                            </a>
                        </div>
                    </div>
                    <div class='-my-2 py-2 sm:-mx-6 sm:px-4 lg:-mx-8 lg:px-8'>
                        <div class='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
                            <table class='min-w-full'>
                                <thead>
                                    <tr class='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider'>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            <input
                                                class='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                                                type='checkbox'
                                            />
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Product Name
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Price
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium  flex-shrink-0 text-nowrap'>
                                            Sale Price
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium tracking-wider whitespace-nowrap'>
                                            Slug
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Categories
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            status
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium w-40'>
                                            Published Date
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {loading && (
                                    <tbody className='px-4'>
                                        <td
                                            className='w-full min-w-full px-4'
                                            rowSpan={9}
                                            colSpan={9}
                                        >
                                            <SkeletonLoader />
                                        </td>
                                    </tbody>
                                )}
                                <tbody class='bg-white'>
                                    {allData.map((product) => (
                                        <tr key={product.id}>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <input
                                                    class='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
                                                    type='checkbox'
                                                />
                                            </td>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div class='text-sm leading-5 text-gray-900'>
                                                    <a
                                                        className='text'
                                                        href='http://'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        {product.product_name}
                                                    </a>
                                                    <p className='text-[10px] text-gray-500'>
                                                        ID: {product.id}
                                                    </p>
                                                </div>
                                            </td>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div class='text-sm leading-5 text-primary'>
                                                    {product.regular_price}
                                                </div>
                                            </td>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div class='text-sm leading-5 text-primary'>
                                                    {product.sale_price}
                                                </div>
                                            </td>
                                            <td class='px-2 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <div class='text-sm leading-5 text-blue-600 line-clamp-1'>
                                                    <a
                                                        href='#'
                                                        className='hover:underline'
                                                    >
                                                        https://pink-lilies/product/sloral-scarf
                                                    </a>
                                                </div>
                                            </td>
                                            <td class='px-2 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                {/* {product.category ? (
                                                    <span class='px-2 inline-flex text-xs leading-5 font-semibold text-yellow-800'>
                                                        {product.category}
                                                    </span>
                                                ) : (
                                                    <span class='px-2 inline-flex text-xs leading-5 font-semibold text-yellow-800'>
                                                        {product.category.name}
                                                    </span>
                                                )} */}
                                            </td>
                                            <td class='px-4 py-4 whitespace-no-wrap border-b border-gray-200'>
                                                <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                                    published
                                                </span>
                                            </td>

                                            <td className='px-4 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                                                {product.created_at &&
                                                product.created_at.seconds &&
                                                product.created_at.nanoseconds
                                                    ? new Intl.DateTimeFormat(
                                                          'en-US',
                                                          {
                                                              year: 'numeric',
                                                              month: 'long',
                                                              day: 'numeric',
                                                              hour: 'numeric',
                                                              minute: 'numeric',
                                                          }
                                                      ).format(
                                                          new Date(
                                                              product.created_at
                                                                  .seconds *
                                                                  1000 +
                                                                  product
                                                                      .created_at
                                                                      .nanoseconds /
                                                                      1e6
                                                          )
                                                      )
                                                    : 'Invalid Date'}
                                            </td>

                                            <td class='px-4 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                                                <div className='flex gap-4'>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                product.id
                                                            )
                                                        }
                                                    >
                                                        <a
                                                            href='#'
                                                            class='text-red-600 hover:text-red-900 focus:outline-none focus:underline'
                                                        >
                                                            <HiTrash />
                                                        </a>
                                                    </button>

                                                    <a
                                                        href='#'
                                                        class='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline'
                                                    >
                                                        <FaRegEdit />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
