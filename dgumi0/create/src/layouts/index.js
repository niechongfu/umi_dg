import styles from './index.css';
import { useState } from 'react';
import { Layout, Menu, Button, Dropdown, Modal } from 'antd';
import Link from 'umi/link';
import router from 'umi/router';
import Pwdchange from '../pages/user/pwdchange';
const { Header, Sider, Content } = Layout;

const Siderdata = [
  { path: '/', name: '首页', roles: ['user', 'admin'] },
  { path: '/user', name: '用户', roles: ['user', 'admin'] },
  { path: '/about', name: '关于', roles: ['admin'] },
];

function BasicLayout(props) {
  // console.log(props);
  const [visible, setVisible] = useState(false);
  const { location } = props;
  // console.log(props.route);
  const path = location.pathname;
  const isUser = !!localStorage.getItem('userinfo');
  const isLogin = !!localStorage.getItem('isLogin');
  const { token, role, username } = JSON.parse(localStorage.getItem('userinfo')) || {
    token: '',
    role: '',
    username: '',
  };

  const authority = path => {
    if (path !== '/404') {
      if (!isUser && !isLogin) {
        router.push('/login');
        return null;
        // return <>{props.children}</>;
      }
      const paths = Siderdata.filter(v => v.roles.some(r => r === role));
      // console.log(paths);
      // console.log(path);
      const isPath = paths.some(v => v.path === path);
      if (!isPath) {
        router.replace('/404');
        // return <>{props.children}</>;
      }
    }
    // console.log(isPath);
  };

  if (path === '/login') {
    if (!isUser && !isLogin) {
      return <>{props.children}</>;
    }
    router.push('/');
  } else {
    authority(path);
  }

  // authority(path);
  const selectedKeys = [path];
  const onSubmit = e => {
    console.log(e);
    //获得注册的信息进行注册 dispatch
  };
  const changepwd = () => {
    setVisible(true);
  };
  const layout = () => {
    localStorage.removeItem('userinfo');
    localStorage.removeItem('isLogin');
    router.replace('/login');
  };
  // console.log('props', { ...props });

  const toSider = () => {
    const { role } = JSON.parse(localStorage.getItem('userinfo')) || 'user';
    // console.log(role);
    const adminSide = Siderdata.filter(v => v.roles.some(r => r === role));

    return adminSide.map(v => {
      return (
        <Menu.Item key={v.path}>
          <Link to={v.path}>
            <span>{v.name}</span>
          </Link>
        </Menu.Item>
      );
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={changepwd}>修改密码</span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={layout}>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.normal} authority={['admin', 'user']}>
      <Layout>
        <Sider trigger={null} collapsible>
          <div className={styles.logo}>XXZX</div>
          <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
            {toSider()}
          </Menu>
        </Sider>
        <Layout className={styles.sitelayout}>
          <Header className={styles.sitelayoutbackground} style={{ padding: 0 }}>
            <div className={styles.layoutlogin}>
              <Dropdown overlay={menu} placement="bottomLeft" style={{ float: 'right' }}>
                <Button type="link">您好：{username}</Button>
              </Dropdown>
            </div>
          </Header>
          <Content
            className={styles.sitelayoutbackground}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 580,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <Modal
        title="密码更改"
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
        <Pwdchange onSubmit={onSubmit}></Pwdchange>
      </Modal>
    </div>
  );
}

// BasicLayout.prototype = {
//   layout: PropTypes.func.isRequired,
// };

export default BasicLayout;
