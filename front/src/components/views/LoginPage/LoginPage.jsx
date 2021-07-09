import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChnageEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChnagePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push('/');
      } else {
        alert();
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onChnageEmail} />
        <label>Password</label>
        <input type="password" value={password} onChange={onChnagePassword} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
