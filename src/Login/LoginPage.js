import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import logoImage from "../assets/udnLogo.jpg";
import "./LoginPage.css";

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="logoContainer">
          <img src={logoImage} />
          <p>聯合智網股份有限公司</p>
        </div>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "使用者格式不符", pattern: /^[a-zA-Z][a-zA-Z0-9]{5,}$/ }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="使用者帳號-5位數以上英文數字混合"
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback={true}>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "密碼格式不符", pattern: /^[a-zA-Z0-9]{6,20}$/}],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密碼-6~20英文數字混合"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登入
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
