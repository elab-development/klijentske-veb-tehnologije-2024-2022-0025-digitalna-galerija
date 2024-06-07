import React, { useState } from 'react';
import './Login.css'; // Importovanje CSS fajla

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Ovde možete dodati logiku za proveru korisničkih podataka
        console.log('Korisničko ime:', username);
        console.log('Lozinka:', password);
    };

    return (
        <div className = "container">
            
            <div className="form-group">
                <label htmlFor="username">Korisničko ime:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Lozinka:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-container"> {/* Dodajemo dodatni div oko dugmeta */}
                <button onClick={handleLogin}>Prijavi se</button>
            </div>
        </div>
    );
};

export default Login;
