import { useState, FC } from 'react';
import { useDispatch } from 'react-redux';

import { login, registration } from '../store/actions/authActions';

const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <input 
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
            />
            <input 
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
            />
            <button onClick={() => dispatch(login({ email, password }))}>Логин</button>
            <button onClick={() => dispatch(registration({ email, password }))}>Регистрация</button>
        </div>
    )
}

export default LoginForm;
