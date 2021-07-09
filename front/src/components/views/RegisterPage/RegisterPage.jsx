import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChnageEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChnageNickanme = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onChnagePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChnageConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    let body = {
      email: email,
      password: password,
      name: name,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push('/login');
      } else {
        alert('Failed to sign up');
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

        <label>Name</label>
        <input type="text" value={name} onChange={onChnageNickanme} />

        <label>Password</label>
        <input type="password" value={password} onChange={onChnagePassword} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onChnageConfirmPassword}
        />

        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default RegisterPage;
