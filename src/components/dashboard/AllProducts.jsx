import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { HiTrash } from 'react-icons/hi';
import { firestore } from '.././../firebase/index';
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
                }, 5000);
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
        console.log('clicked delete');
    };

    return (
        <div class='w-full h-screen bg-gray-50 my-10'>
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
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Sale Price
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Slug
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Categories
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            status
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Published Date
                                        </th>
                                        <th class='px-4 py-3 text-left font-medium'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {/* <!-- HEAD end -->
            <!-- BODY start --> */}
                                {loading && (
                                    <div className='flex justify-center py-10 text-center'>
                                        <div role='status'>
                                            <svg
                                                aria-hidden='true'
                                                class='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                                                viewBox='0 0 100 101'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                                    fill='currentColor'
                                                />
                                                <path
                                                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                                    fill='currentFill'
                                                />
                                            </svg>
                                            <span class='sr-only'>
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
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
                                                <span class='px-2 inline-flex text-xs leading-5 font-semibold text-yellow-800'>
                                                    {product.category}
                                                </span>
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
