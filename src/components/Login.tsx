import React, { useState } from 'react';
import './Login.css'; // Importovanje CSS fajla

const Login: React.FC = () => {
    const [username, setUsername] = useState(''); //useState hook za praćenje stanja unesenih vrednosti 
                                                    //korisničkog imena i lozinke
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); //hook za praćenje eventualne greške pri unosu podataka

    const handleLogin = () => { //Ova funkcija se poziva kada korisnik pritisne dugme "Prijavi se"
                                // Vrši validaciju unetih podataka korisničkog imena i lozinke, 
                                //pri čemu se proverava da li su uneti korisničko ime i lozinka validni.
        const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if (username.length <= 8) {
            setError('Username must be longer than eight characters.');
        } else if (!password) {
            setError('Please enter a password.');
        } else if (!passwordPattern.test(password)) {
            setError('The password must contain uppercase and lowercase letters, a number and a special character.');
        } else {
            // Ovde možete dodati logiku za proveru korisničkih podataka
            console.log('Username:', username);
            console.log('Password:', password);
        }
    };

    return (
        <div className="container"> {/* Dodavanje CSS klase na div */}
            <h1>Login</h1>
            {/*koristimo input elemente za unos korisničkog imena i lozinke;
            value atribut je postavljen na vrednost stanja (username i password);
            a onChange funkcija ažurira odgovarajuće stanje kada se unose nove vrednosti. */}
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="error">{error}</p>} {/* Prikazivanje poruke o grešci ako postoji */}
            <div className="button-container"> {/* Dodajemo dodatni div oko dugmeta */}
                <button onClick={handleLogin}>Login</button> {/*klikom na dugme poziva se funkcija handleLogin*/}
            </div>
        </div>
    );
};

export default Login;