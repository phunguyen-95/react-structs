import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "./style.scss";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Post from "../post/index";

const { Header, Sider, Content } = Layout;

const Container = () => {
  const [collapsed, setToggle] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsed={collapsed}>
        <div className="logo">
          <img src="/public/logo-green.png" alt="logo" />
        </div>

        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ paddingLeft: "16px" }}
        >
          <div
            className="toggle"
            onClick={() => {
              setToggle(!collapsed);
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Post />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;
