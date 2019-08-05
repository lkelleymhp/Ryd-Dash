import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class LoginFormComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { form } = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem label="Username">
          {form.getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem label="Password">
          {form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a
            className="login-form-forgot pull-right text-primary"
            style={{ lineHeight: '36px' }}
            href="javascript: void(0);"
          >
            Forgot password?
          </a>
        </FormItem>
        <div className="form-actions">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
         
        </div>
      
        
      </Form>
    )
  }
}

const LoginForm = Form.create()(LoginFormComponent)
export default LoginForm
