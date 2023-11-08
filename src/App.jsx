import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import SmallerBanner from './components/common/SmallerBanner';
import Header from './components/header/Header';

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
            <Header />
            <Hero />
            <SmallerBanner />
        </>
    );
}

export default App;
