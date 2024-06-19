import React, { useState } from 'react';
import './Login.css';

// Custom hook za upravljanje stanjem forme
const useFormState = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = (users: { username: string; password: string }[]) => {
        const user = users.find(user => user.username === username);

        if (!user || user.password !== password) {
            setError('Invalid username or password.');
        } else {
            console.log('Logged in successfully as:', user.username);
            // Redirekcija na profilnu stranicu
            window.location.href = `/photographer/${user.username}`;
        }
    };

    return { username, password, error, handleUsernameChange, handlePasswordChange, handleLogin };
};

const Login: React.FC = () => {
    const { username, password, error, handleUsernameChange, handlePasswordChange, handleLogin } = useFormState();

    const users = [
        { username: 'Karolina%20Kaboompics', password: 'Password123*' },
        { username: 'Diana%20✨', password: 'Password123*' },
        { username: 'Steve%20Johnson', password: 'Password123*' },
        { username: 'Diogo%20Miranda', password: 'Password123*' },
        { username: 'Anni%20Roenkae', password: 'Password123*' },
        { username: 'Nick%20Collins', password: 'Password123*' }
    ];

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="button-container">
                <button onClick={() => handleLogin(users)}>Login</button>
            </div>
        </div>
    );
};

export default Login;