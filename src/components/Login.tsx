import React, { useState } from 'react';
import './Login.css'; // Importovanje CSS fajla

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (username.length <= 8) {
            setError('Korisničko ime mora biti duže od osam karaktera.');
        } else if (!password) {
            setError('Molimo unesite lozinku.');
        } else if (!passwordPattern.test(password)) {
            setError('Lozinka mora sadržati mala i velika slova, broj i specijalni znak.');
        } else {
            // Ovde možete dodati logiku za proveru korisničkih podataka
            console.log('Korisničko ime:', username);
            console.log('Lozinka:', password);
        }
    };

    return (
        <div className="container"> {/* Dodavanje CSS klase na div */}
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="username">Korisničko ime:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Lozinka:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="error">{error}</p>} {/* Prikazivanje poruke o grešci ako postoji */}
            <div className="button-container"> {/* Dodajemo dodatni div oko dugmeta */}
                <button onClick={handleLogin}>Prijavi se</button>
            </div>
        </div>
    );
};

export default Login;
