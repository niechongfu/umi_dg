import styles from './index.css';
// import PropTypes from 'prop-types';
import { Layout, Menu, Button, Dropdown } from 'antd';
import Link from 'umi/link';
import router from 'umi/router';
const { Header, Sider, Content } = Layout;

function BasicLayout(props) {
  const { location } = props;
  // console.log(location.pathname);
  const path = location.pathname;
  const isUser = !!localStorage.getItem('userinfo');
  console.log(path);

  const toLogin = path => {
    if (path === '/login' && !isUser) {
      return <>{props.children}</>;
    }
  };
  toLogin(path);

  const selectedKeys = [path];

  const layout = () => {
    localStorage.removeItem('userinfo');
    router.push('/login');
  };
  // console.log('props', { ...props });
  let username = '';
  if (isUser) {
    username = JSON.parse(localStorage.getItem('userinfo')).username;
    console.log('user', username);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          修改密码
        </a>
      </Menu.Item>
      <Menu.Item>
        <span onClick={layout}>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.normal} {...props}>
      <Layout>
        <Sider trigger={null} collapsible>
          <div className={styles.logo}>XXZX</div>
          <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
            <Menu.Item key="/">
              <Link to="/">
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/user">
              <Link to="/user">
                <span>用户</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">
                <span>关于</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.sitelayout}>
          <Header className={styles.sitelayoutbackground} style={{ padding: 0 }}>
            <div className={styles.layoutlogin}>
              <Dropdown overlay={menu} placement="bottomLeft" style={{ float: 'right' }}>
                <Button>您好：{username}</Button>
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
            Content
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

// BasicLayout.prototype = {
//   layout: PropTypes.func.isRequired,
// };

export default BasicLayout;
