import React from "react";
import { Form, Input, Button, Card, Space, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";

// 简单的登录验证函数
const validateLogin = (values) => {
  // 这里可以添加更复杂的验证逻辑
  return values.username === "admin" && values.password === "admin";
};

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (validateLogin(values)) {
      message.success("登录成功！");
    } else {
      message.error("用户名或密码错误！");
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card" bordered={false}>
        <div className="login-header">
          <h1>欢迎登录</h1>
          <p>请输入您的账号和密码</p>
        </div>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名！" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="用户名"
              className="login-input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
              className="login-input"
            />
          </Form.Item>

          <Form.Item>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
              <Button type="link" block>
                忘记密码？
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default App;
