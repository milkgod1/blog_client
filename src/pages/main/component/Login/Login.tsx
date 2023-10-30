import { Button, Form, Input, message } from 'antd';
import style from '@/pages/main/component/Login/index.sass';
import loginStore from '@/model/login';
import { rejectCatch } from '@/util/promiseWrapper';
import { userLogin } from '@/api/user';

import { history, useModel } from 'umi';
import { useLogin } from '@/api/graphqls/user';

interface FormProps {
  username: string;
  password: string;
}

const Login = () => {
  const { setInitialState } = useModel('@@initialState');
  const [form] = Form.useForm();
  const { Login, loginLoading } = useLogin();

  const { register, close } = loginStore();
  const onFinish = async ({ username, password }: FormProps) => {
    const { value } = await rejectCatch(
      Login({
        userName: username,
        password: password,
      }),
    );

    if (value) {
      await setInitialState({
        currentUser: value,
      });
      await message.success('login successfully', 1.5);
      close();
    } else {
      message.error('username or password wrong');
      form.resetFields(['password']);
    }
  };

  return (
    <Form
      wrapperCol={{ span: 24 }}
      form={form}
      size="large"
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input placeholder="please input username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="please input password" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" block loading={loginLoading}>
          Login
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          onClick={register}
          className={style['no-padding-button']}
          size="small"
          type="link"
        >
          Not Register ? Register here
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
