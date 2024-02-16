import React from 'react';
import AddProduct from './AddProduct';

const Dashboard = () => {
    return (
        <div className='container mx-auto  grid gap-8 grid-cols-12'>
            <div className='col-span-3 h-screen bg-gray-300'></div>
            <div className='col-span-9'>
                <AddProduct />
            </div>
        </div>
    );
};

export default Dashboard;
