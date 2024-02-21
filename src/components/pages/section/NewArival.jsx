import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../../common/ProductCard';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';
import { firestore } from '.././../../firebase/index';

export default function NewArival() {
    const messageRef = useRef();
    const ref = collection(firestore, 'products');
    const productsRef = collection(firestore, 'products');
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const productData = await getDocs(productsRef);
                setAllData(
                    productData.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                );
                console.log(allData); // Log data here
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    console.log(allData);

    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);
    return (
        <div className='container px-20 mx-auto my-40'>
            <h2 className='text-center text-4xl font-semibold my-20'>
                New Arival
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

                <Tab title='T-Shirts'>hello</Tab>
                <Tab title='Jackets'>hello</Tab>
            </Tabs>
        </div>
    );
}
