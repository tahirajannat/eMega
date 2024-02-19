// Dashboard.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBrand from './AddBrand';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import AllBrands from './AllBrands';
import AllCategories from './AllCategories';
import AllProducts from './AllProducts';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('add-product');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'add-product':
                return <AddProduct />;
            case 'add-category':
                return <AddCategory />;
            // Add more cases as needed
            default:
                return null;
        }
    };

    return (
        <>
            <div className=' mx-auto grid grid-cols-12'>
                <div className='lg:col-span-3 2xl:col-span-2 h-screen bg-gray-300'>
                    <Sidebar />
                </div>
                <div className='lg:col-span-9 2xl:col-span-10 pt-10 bg-gray-50'>
                    <Routes>
                        <Route
                            path='/dashboard/add-product'
                            element={<AddProduct />}
                        />
                        <Route
                            path='/dashboard/add-category'
                            element={<AddCategory />}
                        />
                        <Route
                            path='/dashboard/add-brand'
                            element={<AddBrand />}
                        />
                        <Route
                            path='/dashboard/all-products'
                            element={<AllProducts />}
                        />
                        <Route
                            path='/dashboard/all-categories'
                            element={<AllCategories />}
                        />
                        <Route
                            path='/dashboard/all-brands'
                            element={<AllBrands />}
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
