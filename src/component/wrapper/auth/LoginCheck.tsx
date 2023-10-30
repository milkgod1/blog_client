import { useModel, Redirect } from 'umi';
import React, { useEffect } from 'react';
import { message } from 'antd';

const LoginCheck = (props: { children: React.ReactNode }) => {
  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    if (!initialState?.currentUser) {
      message.error('please login', 1.5);
    }
  }, []);

  if (initialState?.currentUser) {
    return <>{props.children}</>;
  }

  return <Redirect to="/" />;
};

export default LoginCheck;
