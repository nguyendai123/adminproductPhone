import React from "react";
import Devil from "../../../assets/Devil.jsx";
import "./Sidebar.scss";
import {
  AppstoreOutlined,
  MailOutlined,
  HomeOutlined,
  FileTextOutlined,
  SettingOutlined,
  CodeSandboxOutlined,
  TeamOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Tổng quan", "sub1", <HomeOutlined />, [
    getItem("Bán hàng", "1.1"),
    getItem("Dịch vụ - Bảo hành", "1.2"),
  ]),
  getItem("Đơn hàng", "sub2", <FileTextOutlined />, [
    getItem("Tạo đơn hàng", "2.1"),
    getItem("Danh sách đơn hàng", "2.2"),
    getItem("Danh sách đơn hoàn", "2.3"),
    getItem("Đơn đặt hàng", "2.4"),
  ]),

  getItem("Sản phẩm", "sub3", <CodeSandboxOutlined />, [
    getItem("Danh sách sản phẩm", "3.1"),
    getItem("Danh mục sản phẩm", "3.2"),
    getItem("Chính sách giá", "3.3"),
    getItem("Chuyển hàng", "3.4"),
    getItem("Danh sách nhập hàng", "3.5"),
    getItem("Nhà cung cấp", "3.6"),
    getItem("Quản lý kho", "3.7"),
    getItem("Đặt hàng nhập", "3.8"),
  ]),
  getItem("Dịch vụ - Bảo hành", "sub4", <SettingOutlined />, [
    getItem("Tạo phiếu mới", "4.1"),
    getItem("Danh sách phiếu", "4.2"),
    getItem("Danh sách dịch vụ", "4.3"),
    getItem("Danh mục dịch vụ", "4.4"),
  ]),
  getItem("Khách hàng", "sub5", <TeamOutlined />, [
    getItem("Danh sách khách hàng", "5.1"),
    getItem("Nhóm khách hàng", "5.2"),
  ]),
  getItem("Sổ quỹ", "sub6", <Devil />, [
    getItem("Phiếu thu", "6.1"),
    getItem("Phiếu thu", "6.2"),
    getItem("Sổ quỹ", "6.3"),
  ]),
  getItem("Báo cáo", "sub7", <PieChartOutlined />, [
    getItem("Báo cáo bán hàng", "7.1"),
    getItem("Báo cáo nhập hàng", "7.2"),
    getItem("Báo cáo hàng hóa", "7.3"),
    getItem("Báo cáo khách hàng", "7.4"),
    getItem("Báo cáo tài chính", "7.5"),
    getItem("Báo cáo nhân viên", "7.6"),
  ]),
];
const Sidebar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
