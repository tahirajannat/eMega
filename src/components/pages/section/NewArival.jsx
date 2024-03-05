// NewArival.js

import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectProduct,
    updateProductSlice,
} from '../../../redux/reducers/productSlice'; // Assuming your reducer is in this path
import ProductCard from '../../common/ProductCard';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';
import { firestore } from '.././../../firebase/index';

export default function NewArival() {
    const messageRef = useRef();
    const ref = collection(firestore, 'products');
    const productsRef = collection(firestore, 'products');
    const [allData, setAllData] = useState([]);

    const dispatch = useDispatch();
    const productShop = useSelector(selectProduct);
    const [allProducts, setAllProducts] = useState(productShop);

    useEffect(() => {
        const getData = async () => {
            try {
                const productData = await getDocs(productsRef);
                const data = productData.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    created_at: doc.data().created_at.toMillis(), // Convert to milliseconds
                }));

                setAllData(data);
                // dispatch(updateProductSlice({ products: data }));
                setAllProducts(
                    dispatch(
                        updateProductSlice({
                            ...productShop,
                            products: allData,
                        })
                    )
                );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, [dispatch, productsRef]);

    useEffect(() => {
        // Access and log the updated data from the reducer
        // console.log('Data from Redux:', productShop);
        setAllProducts(...(productShop || []));
        // setAllProducts(
        //     dispatch(updateProductSlice({ ...productShop, products: allData }))
        // );
    }, [productShop]);

    // console.log('Products in component state:', allProducts);

    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <div className='container px-20 mx-auto my-40'>
            <h2 className='text-center text-4xl font-semibold my-20'>
                New Arrival
            </h2>
            <Tabs active={active} onChange={handleChange}>
                <Tab title='All Product'>
                    <div className='grid grid-cols-4 gap-10 '>
                        <ProductCard
                            items={allData}
                            startIndx={0}
                            endIndx={8}
                        />
                    </div>
                </Tab>
                {/* Other tabs go here */}
            </Tabs>
        </div>
    );
}
