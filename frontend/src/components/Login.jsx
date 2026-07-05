import {useState} from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
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
            
            localStorage.setItem('token', data.token);

            console.log('Login successful! Token saved:', data.token);
            alert('Login successful! Redirecting to dashboard...');

        } catch (error) {
            console.log('Login error:', error.message);
            alert('Login failed:', error.message);
        }
    }

    return (
        <>
            <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-blue-500 text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;