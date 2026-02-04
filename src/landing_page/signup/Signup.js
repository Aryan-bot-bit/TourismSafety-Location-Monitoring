
import React, { useState } from 'react';

function Signup({ onSignup }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        localStorage.setItem('user', JSON.stringify({ username, password }));
        onSignup();
    };

    return (
        <div>
            <div className="row mt-3">
                <h3 className="col-6 offset-3">Signup on TradGoo</h3>
                <div className="col-6 offset-3">
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input name="username" id="username" type="text" className="form-control" required 
                                   value={username} onChange={(e) => setUsername(e.target.value)} />
                            <div className="valid-feedback">Looks Good!</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input name="email" id="email" type="email" className="form-control" required 
                                   value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input name="password" id="password" type="password" className="form-control" required 
                                   value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-success">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;





