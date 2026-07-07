import {useState} from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/v1/auth/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            })

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Signup failed');
            }

            alert('Signup successful! Please login.');
            window.location.href = "/login";    

        } catch (error) {
            console.error('Signup failed:', error.message);
            alert('Signup failed:', error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-blue-500 text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-4">
                        <label className="">Password</label>
                        <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>
                </form>
            </div>
        </>
    );
}

export default Signup;