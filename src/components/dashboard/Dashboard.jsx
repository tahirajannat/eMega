// Dashboard.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBrand from './AddBrand';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import AllBrands from './AllBrands';
import AllCategories from './AllCategories';
import AllProducts from './AllProducts';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <>
            <div className=' mx-auto grid grid-cols-12'>
                <div className='lg:col-span-3 2xl:col-span-2 h-[100vh] bg-gray-800 '>
                    <Sidebar />
                </div>
                <div className='lg:col-span-9 2xl:col-span-10 pt-10 bg-gray-50'>
                    <Routes>
                        <Route path='add-product' element={<AddProduct />} />
                        <Route path='add-category' element={<AddCategory />} />
                        <Route path='add-brand' element={<AddBrand />} />
                        <Route path='all-products' element={<AllProducts />} />
                        <Route
                            path='all-categories'
                            element={<AllCategories />}
                        />
                        <Route path='all-brands' element={<AllBrands />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
