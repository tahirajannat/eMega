import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddCategory from './components/dashboard/AddCategory';
import AddProduct from './components/dashboard/AddProduct';
import AllCategories from './components/dashboard/AllCategories';
import AllProducts from './components/dashboard/AllProducts';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/pages/Home';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/my-account/*' element={<Dashboard />} /> */}
                    <Route path='/dashboard' element={<Dashboard />} />
                    {/* <Route path='/' exact component={Dashboard} /> */}
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/add-category' element={<AddCategory />} />
                    <Route path='/all-products' component={<AllProducts />} />
                    <Route
                        path='/all-Categories'
                        component={<AllCategories />}
                    />
                    {/* <Route path='/all-products' component={Products} />
                <Route path='/categories' component={Products} />
                <Route path='/features' component={Features} />
                <Route path='/download' component={Download} />
                <Route path='/faq' component={FAQ} /> */}
                </Routes>
            </Router>
            <Router>
                <Dashboard />
            </Router>
        </>
    );
}

export default App;
