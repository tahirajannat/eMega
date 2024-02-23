import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddCategory from './components/dashboard/AddCategory';
import AddProduct from './components/dashboard/AddProduct';
import AllCategories from './components/dashboard/AllCategories';
import AllProducts from './components/dashboard/AllProducts';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/pages/Home';
import Single from './components/views/Single';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard/*' element={<Dashboard />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/add-category' element={<AddCategory />} />
                    <Route path='/all-products' element={<AllProducts />} />
                    <Route path='/all-Categories' element={<AllCategories />} />
                    <Route path='/single' element={<Single />} />
                </Routes>
            </Router>

            {/* <Single /> */}
        </>
    );
}

export default App;
