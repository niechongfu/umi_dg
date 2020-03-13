import { Form, Input, Icon, Button } from 'antd';
// import styles from './about.css';

const PwdChange = Form.create()(props => {
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
    // console.log(e.target.value);
    // const res = form.validateFields(['password']);
    const res = form.getFieldValue('Newpassword') === e.target.value;

    console.log('res', res);
  };
  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('Newpassword')) {
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
        <Form.Item label="旧密码">
          {getFieldDecorator('Oldpassword', {
            rules: [
              {
                required: true,
                message: '请输入你的密码!',
              },
              // {
              //   validator: handleOldpwdBlur()
              //     ? (rule, value, callback) => callback()
              //     : compareOldPwd,
              // },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新密码" hasFeedback>
          {getFieldDecorator('Newpassword', {
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
        <Form.Item label="确认新密码" hasFeedback>
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
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default PwdChange;
