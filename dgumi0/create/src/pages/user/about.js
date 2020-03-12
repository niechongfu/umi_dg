import { Icon,Modal, Button } from 'antd';
import Register from "./register"
import styles from './about.css';

const LoginDemo = props => {
  // console.log(props);
  

  return (
    <div>
      <Button type="primary" >注册</Button>
      <Modal
          title="用户注册"
          visible={false}
          footer={null}
          centered
          // destroyOnClose={true}
        >
        </Modal>
      <Register></Register>
    </div>
  );
}


export default LoginDemo;
