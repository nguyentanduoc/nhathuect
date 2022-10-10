import { Button, Card, Form, Input, Row, Typography } from "antd";
import { useEffect } from "react";
import { useApiPost } from "../../hooks/api/usePostApi";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Login = () => {
  const { execute, data, error, loading } = useApiPost("auth/login");

  const onFinish = async (data: any) => {
    execute(data);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const onFinishFailed = () => {};

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Card>
        <Title style={{ textAlign: "center" }}>Login</Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
export default Login;
