import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

function Navbar() {
    const [mode, setMode] = useState('track');
    
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const dispatch = useDispatch();
    const toggleDarkMode = () => {
        dispatch(toggleTheme());
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16">

                <span className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">HuntTrack</span>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 hover:shadow-sm">
                    <button className={`px-4 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${mode==='hunt' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:text-blue-600 hover:scale-105'}`} onClick={() => setMode("hunt")}>Hunt</button>
                    <button className={`px-4 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${mode==='track' ? 'bg-blue-600 text-white shadow-sm cursor-default' : 'text-gray-600 hover:text-blue-600 hover:scale-105'}`} onClick={() => setMode("track")}>Track</button>
                </div>

                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition text-xl cursor-pointer py-1 px-2 rounded-md hover:shadow-sm" aria-label="Toggle dark mode" onClick={toggleDarkMode}>{isDarkMode ? "☀️" : "🌙"}</button>

            </div>
        </nav>
    );
}

export default Navbar;