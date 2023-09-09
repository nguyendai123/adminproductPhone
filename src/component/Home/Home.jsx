import React from "react";
import { Layout, Space } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import HomeContent from "./HomeContent/HomeContent";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  color: "#fff",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  width: "100%",
  color: "#fff",
  backgroundColor: "#dee1e6",
};

const Home = () => {
  return (
    <>
      <Layout>
        <Sider
          style={{
            width: 356,
            backgroundColor: "#fff",
          }}
        >
          <Layout>
            <Header
              style={{
                width: 256,
                backgroundColor: "#fff",
              }}
            >
              tranlinhmobile
            </Header>
            <Sidebar
              style={{
                width: 356,
                backgroundColor: "#fff",
              }}
            />
          </Layout>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            Danh sách phiếu xuất linh kiện dịch vụ
          </Header>
          <Content style={contentStyle}>
            <HomeContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
