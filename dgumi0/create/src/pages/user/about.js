import { Icon, Modal, Button, Input, Row, Col, Table, Divider, Tag } from 'antd';
import { useState } from 'react';
import Register from './register';
import styles from './about.css';

const LoginDemo = props => {
  // console.log(props);
  const onSubmit = e => {
    console.log(e);
    //获得注册的信息进行注册 dispatch
  };

  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Row type="flex" justify="space-around" className={styles.head}>
        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            新用户注册
          </Button>
        </Col>
        <Col span={12}>
          <Input></Input>
        </Col>
        <Col span={4}>
          <Button>查询</Button>
        </Col>
      </Row>
      <div className={styles.table}>
        <Table columns={columns} dataSource={data} />
      </div>
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
        <Register onSubmit={onSubmit}></Register>
      </Modal>
    </div>
  );
};

export default LoginDemo;

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];
