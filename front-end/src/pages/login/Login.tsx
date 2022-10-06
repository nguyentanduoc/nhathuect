import { Card, Row, Typography, Form, Button, Input } from "antd";
const { Title } = Typography;
const Login = () => {
  const onFinish = (data: any) => {
    console.log(data);
  };
  const onFinishFailed = () => {};
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Card>
        <Title style={{ textAlign: "center" }}>Login</Title>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
export default Login;
