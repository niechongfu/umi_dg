import { Cascader, Form, Button, Input, Row, Col } from 'antd';
import styles from './about.css';

const LoginDemo = Form.create()(props => {
  const { form, onSubmit } = props;
  console.log(onSubmit);
  const { getFieldDecorator } = form;
  // console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    // alert(1);
    // const {form: { validateFields }} = props;
    form.validateFields((errors, values) => {
      // ...['username', 'Nickname', 'phone']
      console.log(values);
      console.log(errors);
      if (!errors) {
        onSubmit(values);
      }
    });
    //获得注册的信息进行注册 dispatch
  };

  const disModify = e => {
    e.preventDefault();
    onSubmit(false);
  };
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }

  function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }
  return (
    <div>
      <div>
        <Form {...formItemLayout} hideRequiredMark onSubmit={handleSubmit}>
          <Form.Item label={'用户名'}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入你的用户名!', whitespace: true }],
            })(<Input placeholder="dgyc" />)}
          </Form.Item>
          <Form.Item label={<span> 姓名</span>}>
            {getFieldDecorator('Nickname', {
              rules: [{ required: true, message: '请输入你的名字!', whitespace: true }],
            })(<Input placeholder="Basic usage" />)}
          </Form.Item>
          <Form.Item label={<span>部门</span>}>
            <Cascader
              options={options}
              onChange={onChange}
              placeholder="Please select"
              showSearch={{ filter }}
            />
          </Form.Item>
          <Form.Item label="手机">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '18688698805!' }],
            })(<Input placeholder="18688698805" />)}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '请输入你正确的邮箱!',
                },
                {
                  required: true,
                  message: '请输入你的邮箱!',
                },
              ],
            })(<Input placeholder="1368205921@qq.com" />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              className={styles.modifybut}
              type="primary"
              ghost
            >
              提交
            </Button>
            <Button type="primary" htmlType="submit" onClick={disModify} type="danger" ghost>
              放弃
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
});

export default LoginDemo;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
    md: { span: 4 },
    lg: { span: 8 },
    xl: { span: 8 },
    xxl: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    md: { span: 16 },
    lg: { span: 16 },
    xl: { span: 12 },
    xxl: { span: 12 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
    md: {
      span: 24,
      offset: 0,
    },
    lg: {
      span: 24,
      offset: 0,
    },
    xl: {
      span: 24,
      offset: 0,
    },
    xxl: {
      span: 24,
      offset: 0,
    },
  },
};
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];
