import { Form, Input, Icon, Button } from 'antd';
// import styles from './about.css';

const Register = Form.create()(props => {
    // console.log(props);
    const handleSubmit = (e) => {
        console.log(e)
        alert(1)
        const {
            form: { validateFields },
          } = props;
          validateFields(["username"],(errors, values) => {
            // ...
            console.log(values)
          });
    }
    
    const handleConfirmBlur = (err, v) => {
        console.log('Success:', v);
    };
    const compareToFirstPassword = (rule, value, callback) => {
        // const { form } = this.props;
        // if (value && value !== form.getFieldValue('password')) {
        //     callback('Two passwords that you enter is inconsistent!');
        // } else {
        //     callback();
        }
    
    
    const validateToNextPassword = (rule, value, callback) => {
        // const { form } = this.props;
        // if (value && this.state.confirmDirty) {
        //     form.validateFields(['confirm'], { force: true });
        // }
        // callback();
    };
    // const form = Form.create();
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
                <Form.Item
                    label={"用户名"}
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
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
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item
                    label={<span> 昵称</span>}
                >
                    {getFieldDecorator('Nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="手机">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
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
}
)

export default Register;
