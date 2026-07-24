import {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const userEmail = user?.email || 'User';
    const initial = userEmail.charAt(0).toUpperCase();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={menuRef} className="relative">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                <button onClick={() => setIsOpen(!isOpen)} className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition">{initial}</button>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-200/50 dark:border-gray-800/60 shadow-xl z-50">
                    <div className="px-2 pb-2">
                        <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Logged in as</span>
                        <span className="block text-xs text-gray-600 dark:text-gray-300 font-medium truncate mt-0.5" title={userEmail}>{userEmail}</span>
                    </div>
                    <div className="h-px bg-gray-100 dark:bg-gray-800/60"/>
                    <button onClick={handleLogout} className="w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-red-600 dark:hover:text-red-400 transition">Logout</button>
                </div>
            )}
        </div>
    );
}

export default UserMenu;