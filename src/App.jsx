import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-account' element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
