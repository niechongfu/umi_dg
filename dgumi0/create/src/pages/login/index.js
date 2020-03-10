import styles from './index.css';
import { Icon } from 'antd';
import { Login } from 'ant-design-pro';
const { UserName, Password, Submit } = Login;

const LoginDemo = props => {
  const onSubmit = (err, v) => {
    console.log('Success:', v);
  };

  return (
    <div className={styles.loginForm}>
      <Login onSubmit={onSubmit}>
        <UserName
          placeholder="large Password"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        />

        <Password
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        />
        <Submit>Login</Submit>
      </Login>
    </div>
  );
};

export default LoginDemo;
