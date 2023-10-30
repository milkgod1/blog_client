import { Button, Form, Input } from 'antd';
import style from '@/pages/main/component/Login/index.sass';
import loginStore from '@/model/login';

const Register = () => {
  const [form] = Form.useForm();

  const { open } = loginStore();

  const onFinish = (value: any) => {
    console.log(value);
  };

  return (
    <Form
      wrapperCol={{ span: 24 }}
      form={form}
      size="large"
      layout="horizontal"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'please input your username!' }]}
        hasFeedback
      >
        <Input placeholder="please input username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'please input your password!' },
          () => ({
            validator(_, value) {
              if (value.length < 8) {
                return Promise.reject('password length must be longer than 8');
              }
              if (value.length > 16) {
                return Promise.reject(
                  'password length must be smaller than 15',
                );
              }
              if (
                /^(?!^[0-9]+$)(?!^[a-z]+$)(?!^[A-Z]+$)(?!^[0-9a-z]+$)(?!^[0-9A-Z]+$)(?!^[a-zA-Z]+$)[a-z0-9A-Z]{8,14}$/.test(
                  value,
                )
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                'password must contain number, lowercase and uppercase character',
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="please input password" />
      </Form.Item>
      <Form.Item
        name="check"
        rules={[
          { required: true, message: 'please check your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="input your password again" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <span>Have account already? Login </span>
        <Button
          onClick={open}
          className={style['no-padding-button']}
          size="small"
          type="link"
        >
          here
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
