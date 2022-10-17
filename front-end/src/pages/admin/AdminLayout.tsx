import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// const items: MenuItem[] = [
//   getItem("User", "user", <UserOutlined />),
// getItem("Option 2", "2", <DesktopOutlined />),
// getItem("Team", "sub2", <TeamOutlined />, [
//   getItem("Team 1", "6"),
//   getItem("Team 2", "8"),
// ]),
// getItem("Files", "9", <FileOutlined />),
// ];

const defaultSelect = "/admin/user";
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<string>(defaultSelect);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = useCallback(
    (info: any) => {
      if (active === info.key) {
        return;
      }
      navigate(info.key);
      setActive(info.key);
    },
    [active, navigate]
  );

  const items = useMemo(() => {
    const menuItems: MenuItem[] = [
      {
        label: "User",
        key: "/admin/user",
        icon: <UserOutlined />,
      },
      {
        label: "Post",
        key: "/admin/post",
        icon: <UserOutlined />,
      },
    ];
    return menuItems;
  }, []);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <LayoutStyled>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[active]}
          mode="inline"
          items={items}
          onClick={handleOnClick}
        />
      </Sider>
      <Layout className="site-layout" style={{ minHeight: "100vh" }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "16px 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>NhaThue2022-NTD</Footer>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;
export default Admin;
