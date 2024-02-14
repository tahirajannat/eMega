import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
<<<<<<< HEAD
import Home from './components/pages/Home';
=======
import SmallerBanner from './components/common/SmallerBanner';
import Header from './components/header/Header';
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <div className='card bg-blue-900'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p> */}
<<<<<<< HEAD
            {/* <Header />
            <Hero />
            <SmallerBanner /> */}
            <Home />
            <Hero />
=======
            <Header />
            <Hero />
            <SmallerBanner />
>>>>>>> 6d868d28b018d03ad0f7d5f4569e2e107b5e1dc6
        </>
    );
}

export default App;
