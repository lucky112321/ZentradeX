import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Pages/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            const { token, user } = response.data;
            login(user, token);
            // Redirect to dashboard on port 3000 with auth data
            window.location.href = `http://localhost:3001?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`;
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className='container p-5 mb-5'>
            <div className='row justify-content-center'>
                <div className='col-4 p-5 border rounded shadow-sm bg-light'>
                    <h2 className='text-center mb-4'>Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <p className='mt-3 text-center'>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
