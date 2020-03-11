import styles from './index.css';
// import { Icon } from 'antd';
import { Login } from 'ant-design-pro';

import { connect } from 'dva';
const { UserName, Password, Submit } = Login;

export default connect(({ login: payload, loading }) => ({
  payload,
  loading,
}))(function(props) {
  // console.log('props:', props);

  const onSubmit = (err, v) => {
    if (!err) {
      props.dispatch({ type: 'login/login', payload: v });
      // const { username, password } = v;
      // console.log('Success:', v);
      // if (username === 'dgyc' && password === '123') {
      //   router.push('/');
      // }
    }
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
            {
              validator: async (rule, value) => {
                // console.log(value);
                // console.log(rule);
                if (value.length < 3) {
                  throw new Error('Something wrong!');
                }
              },
            },
          ]}
        />
        <Submit>Login</Submit>
      </Login>
    </div>
  );
});

// export default LoginDemo;
