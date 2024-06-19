// Login.tsx

import React from 'react';
import './Login.css';
import LoginManager from './LoginManager';
import { User } from '../models/LoginManagerProps';

const Login: React.FC = () => {
    const users: User[] = [
        { username: 'Karolina%20Kaboompics', password: 'Password123*' },
        { username: 'Diana%20✨', password: 'Password123*' },
        { username: 'Steve%20Johnson', password: 'Password123*' },
        { username: 'Diogo%20Miranda', password: 'Password123*' },
        { username: 'Anni%20Roenkae', password: 'Password123*' },
        { username: 'Nick%20Collins', password: 'Password123*' }
    ];

    return <LoginManager users={users} />;
};

export default Login;
