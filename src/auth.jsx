import React from 'react';
import userService from './services/userService';

let status = -1;
const Auth = () => {
  if (status === -1) {
    console.log(222);
    throw userService.checkLogin().then(() => {
      status = 0;
    });
  }

  return <div>1</div>;
};

export default Auth;
