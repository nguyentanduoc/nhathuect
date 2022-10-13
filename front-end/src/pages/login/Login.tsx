import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Form, Input, Row, Space, Typography } from "antd";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ApiContext } from "../../contexts/ApiContext";

const { Title } = Typography;

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const { doPost } = useContext(ApiContext);

  const onFinish = async (data: any) => {
    try {
      const dataRes = await doPost("auth/login", data);
      console.log(dataRes);
    } catch (e: any) {
      setErrorMessage(e?.message);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Card>
        <Space direction="vertical">
          <Title style={{ textAlign: "center" }}>Login</Title>
          {errorMessage && <Alert message={errorMessage} type="error"></Alert>}
          <StyledForm
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </StyledForm>
        </Space>
      </Card>
    </Row>
  );
};
const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 8px;
  }
`;
export default Login;
