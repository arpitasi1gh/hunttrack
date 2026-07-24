import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../redux/authSlice';

function Login() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }
            
            dispatch(login({token: data.token, user: data.user}));
            // localStorage.setItem('token', data.token);

            alert('Login successful! Redirecting to dashboard...');
            window.location.href = "/";

        } catch (error) {
            setError(error.message);
            console.error('Login error:', error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-50 dark:bg-gray-90 shadow-lg rounded-lg">
            <h1 className="text-blue-600 dark:text-blue-400 text-2xl font-bold text-center">Login to HuntTrack</h1>
                {error && (<div className="text-red-600 dark:text-red-300 text-sm bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-md mt-4 px-4 py-2">⚠️ {error}</div>)}
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Don't have an account?
                    <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Signup</Link>
                </p>
            </form>
        </div>
        
    );
}

export default Login;