

import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        // Check if the entered credentials match the stored ones
        if (user && user.username === username && user.password === password) {
            onLogin(); // Call this on successful login
        } else {
            alert('Invalid credentials!'); // Handle invalid login
        }
    };

    return (
        <div>
            <div className="row mt-3">
                <h2 className="col-6 offset-3">Login</h2>
                <div className="col-6 offset-3">
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input name="username" id="username" type="text" className="form-control" required 
                                   value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input name="password" id="password" type="password" className="form-control" required 
                                   value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;




