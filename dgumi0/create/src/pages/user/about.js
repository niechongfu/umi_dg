import Login from 'ant-design-pro/lib/Login';
const { UserName, Password, Submit } = Login;
// import styles from './about.css';

const LoginDemo = props => {
  // console.log(props);
  const onSubmit = (err, v) => {
    console.log('Success:', v);
  };

  return (
    <div>
      <div>about</div>
      <Login onSubmit={onSubmit}>
        <UserName name="username" />
        <Password name="password" />
        <Submit>Login</Submit>
      </Login>
    </div>
  );
};

export default LoginDemo;
