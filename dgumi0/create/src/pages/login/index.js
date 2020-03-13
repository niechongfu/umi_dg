import styles from './index.css';
import Register from '../user/register';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { Login } from 'ant-design-pro';

import { connect } from 'dva';
const { UserName, Password, Submit } = Login;

export default connect(({ login: payload, loading }) => ({
  payload,
  loading,
}))(function(props) {
  // console.log('props:', props);
  const [visible, setVisible] = useState(false);

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

  const onOk = e => {
    console.log(e);
    //获得注册的信息进行注册 dispatch
  };
  const handlRegit = e => {
    setVisible(true);
    //获得注册的信息进行注册 dispatch
  };
  const handlReget = e => {
    setVisible(true);
    //获得注册的信息进行注册 dispatch
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
        <Submit>登录</Submit>
      </Login>
      <Button type="link" onClick={handlRegit}>
        新用户注册
      </Button>
      <Button type="link" onClick={handlReget}>
        忘记密码
      </Button>
      <Modal
        title="用户注册"
        headerStyle={{ textAlign: 'right' }}
        visible={visible}
        footer={null}
        maskClosable
        centered
        onCancel={() => {
          setVisible(false);
        }}
        destroyOnClose={true}
      >
        <Register onSubmit={onOk}></Register>
      </Modal>
    </div>
  );
});

// export default LoginDemo;
