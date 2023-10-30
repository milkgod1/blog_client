import loginStore from '@/model/login';
import { Modal } from 'antd';
import Register from '@/pages/main/component/Login/Register';
import Login from './Login';

const Auth = () => {
  const { status, close } = loginStore();

  return (
    <Modal
      visible={status !== 'close'}
      footer={null}
      width={380}
      title={'Login'}
      onCancel={close}
    >
      {status === 'open' ? <Login /> : <></>}
      {status === 'register' ? <Register /> : <></>}
    </Modal>
  );
};

export default Auth;
