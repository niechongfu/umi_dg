import { Cascader, Form, Input, Button } from 'antd';
// import styles from './about.css';

const Register = Form.create()(props => {
  //   console.log(props);
  const { form, onSubmit } = props;
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.preventDefault);
    // alert(1);
    // const {form: { validateFields }} = props;
    form.validateFields((errors, values) => {
      // ...['username', 'Nickname', 'phone']
      console.log(values);
      console.log(errors);
      onSubmit(values);
    });
  };

  const handleConfirmBlur = e => {
    console.log(e.target.value);
    // const res = form.validateFields(['password']);
    const res = form.getFieldValue('password') === e.target.value;

    console.log('res', res);
  };
  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一样，请重新输入!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && form.getFieldValue('confirm')) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  const validateTophone = (rule, value, callback) => {
    //   const reg = /^1[3-9]\d{9}/;
    const reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    if (value.length > 0 && value.slice(0, 1) != 1) {
      callback('手机号码第一位有误!');
    }
    if (value.length > 1 && !reg.test(value)) {
      callback('不是正确的手机号码!');
    }
    // const len1 = value.slice(0, 1);
    // console.log('len1', len1);
    // console.log(reg.test(value));
    callback();
  };
  const validateToname = (rule, value, callback) => {
    //   const reg = /^1[3-9]\d{9}/;
    const reg = /^[\u4E00-\u9FA5]{2,4}$/;

    if (!reg.test(value)) {
      callback('请输入正确的姓名!');
    }
    callback();
  };
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
  const { getFieldDecorator } = props.form;
  // console.log(props.form)

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label={'用户名'}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入你的用户名!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入你的密码!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="确认密码" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请再次输入你的密码!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label={<span> 姓名</span>}>
          {getFieldDecorator('Nickname', {
            rules: [
              { required: true, message: '请输入你的名字!', whitespace: true },
              {
                validator: validateToname,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>部门</span>}>
          {getFieldDecorator('department', {
            rules: [{ required: true, message: '请输入你的部门!' }],
          })(<Cascader options={options} onChange={onChange} placeholder="请选择你的部门!" />)}
          {/* <Cascader options={options} onChange={onChange} placeholder="请选择你的部门!" /> */}
        </Form.Item>
        <Form.Item label="手机">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: '请输入你的手机号码!' },
              {
                validator: validateTophone,
              },
            ],
          })(<Input />)}
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
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Register;
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
