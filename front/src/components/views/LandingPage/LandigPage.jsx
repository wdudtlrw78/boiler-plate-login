import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandigPage(props) {
  const onClickLogout = () => {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('로그아웃 하는데 실패 했습니다.');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickLogout}>Logout</button>
    </div>
  );
}

export default withRouter(LandigPage);
