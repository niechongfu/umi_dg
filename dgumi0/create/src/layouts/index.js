import styles from './index.css';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
const { Header, Sider, Content } = Layout;

function BasicLayout(props) {
  const { location } = props;
  console.log(location.pathname);
  if (location.pathname === '/login') return <>{props.children}</>;
  const selectedKeys = [location.pathname];
  return (
    <div className={styles.normal}>
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
          <Header className={styles.sitelayoutbackground} style={{ padding: 0 }}></Header>
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

export default BasicLayout;
