import Login from 'ant-design-pro/lib/Login';
const { UserName, Password, Submit } = Login;
// import styles from './about.css';

const LoginDemo = props => {
  const onSubmit = (err, v) => {
    console.log('Success:', v);
  };

  return (
    <Login onSubmit={onSubmit}>
      <UserName name="username" />
      <Password name="password" />
      <Submit>Login</Submit>
    </Login>
  );
};

export default LoginDemo;
