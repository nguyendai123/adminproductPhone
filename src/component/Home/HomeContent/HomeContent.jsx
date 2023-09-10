import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, redirect } from "react-router-dom";

import { Button, Divider, Input, Space, Menu, Tag, Table } from "antd";
import {
  SearchOutlined,
  DownOutlined,
  FilterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  CloseOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./HomeContent.scss";
const dividerStyle = {
  height: "100%",
  borderInlineStart: "1px solid white",
};

const items = [
  {
    label: (
      <Link className="link" to="/">
        Đang lọc
      </Link>
    ),
    key: "Đang lọc",
  },
  {
    label: (
      <Link className="link" to="/adj">
        Yêu cầu
      </Link>
    ),
    key: "Yêu cầu",
  },
  {
    label: "Đã xuất kho",
    key: "Đã xuất kho",
  },
  {
    label: (
      <div style={{ border: "none" }}>
        Cần xác nhận <DownOutlined />
      </div>
    ),
    key: "Cần xác nhận",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "Option 1",
          },
          {
            label: "Option 2",
            key: "Option 2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "Option 3",
          },
          {
            label: "Option 4",
            key: "Option 4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <Button>
        <FilterOutlined />{" "}
        <Link className="link" to="/filter">
          Bộ lọc
        </Link>
      </Button>
    ),
    key: "Bộ lọc",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 5",
            key: "Option 5",
          },
          {
            label: "Option 6",
            key: "Option 6",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 7",
            key: "Option 7",
          },
          {
            label: "Option 8",
            key: "Option 8",
          },
        ],
      },
    ],
  },
  {
    label: (
      <>
        <Button type="primary">
          <PlusOutlined />
          Thêm mới
          <Divider type="vertical" style={dividerStyle} />
          <EllipsisOutlined />
        </Button>
      </>
    ),
    key: "Thêm mới",
  },
];
const columns = [
  {
    title: "Mã phiếu",
    dataIndex: "Mã phiếu",
  },

  {
    title: "Tên sản phẩm",
    dataIndex: "productname",
    key: "productname",
    sorter: (a, b) => a.productname?.length - b.productname?.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Giá bán",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Kho",
    dataIndex: "Kho",
  },
  {
    title: "Mã phiếu dịch vụ",
    dataIndex: "Mã phiếu dịch vụ",
  },
  {
    title: "Trạng thái",
    dataIndex: "Trạng thái",
  },
  {
    title: "Loại",
    dataIndex: "Loại",
  },
  {
    title: "Kỹ thuật",
    dataIndex: "Kỹ thuật",
  },
];
const data = [];
const dataProductName = [
  "Kính iPhone 14 Pro Max",
  "Ron viền iPhone 14 Pro Max",
  "Keo OCA iPhone 14 Pro Max",
  "Màn hình Samsung Galaxy A52",
  "Kính Samsung Galaxy Note 9",
  "OCA Samsung Galaxy Note 9",
  "OCA Samsung Galaxy Note 9",
  "Bộ cáp main Samsung Galaxy Z Fold 3",
  "Màn hình Apple Watch Series 6",
];
const trangthai = [
  "Yêu cầu",
  "Đã xuất kho",
  "Hủy",
  "Đã xác nhận",
  "Cần xác nhận",
  "Trả lại",
];
const price1 = [300, 500, 100, 30, 2000, 340, 10, 2005, 5000];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    "Mã phiếu": `XKLK21738`,
    productname: dataProductName[i],
    price: price1[i],
    Kho: `London, Park Lane no. ${i}`,
    "Mã phiếu dịch vụ": "PBH98142",
    "Trạng thái": trangthai[i],
    Loại: "Linh kiện cần",
    "Kỹ thuật": "Bình",
  });
}
const defaultFooter = () => "Hiển thị 1 - 10 của 1126";
const HomeContent = () => {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("Đang lọc");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const onClickWebSiteLogo = () => {
    return navigate("/");
  };
  const onClickYeuCau = () => {
    return navigate("/adj");
  };
  const onClickFilter = () => {
    return navigate("/filter");
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,

      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div className="home-content">
      <div className="home-content-inputmenu">
        <Input
          placeholder="Tìm kiếm theo mã khách hàng, tên khách hàng và số điện thoại"
          prefix={<SearchOutlined />}
        />
        <Space>
          <Menu
            style={{
              backgroundColor: "#dee1e6",
              color: "black",
              border: "none",
            }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Space>
      </div>
      <Space className="content-home-fil">
        <Tag bordered={false} closable className="btn-content-home-fil">
          <span> Trạng thái: Đã xuất kho, Đã xác nhận</span>
        </Tag>
        <Tag bordered={false} closable className="btn-content-home-fil">
          <span> Kho: TLM, LK247</span>
        </Tag>
        <Tag bordered={false} closable className="btn-content-home-fil">
          <span> Kỹ thuật: Bình, Khoa</span>
        </Tag>
      </Space>
      <div className="home-content-table">
        <Table
          size="middle"
          columns={columns}
          rowSelection={rowSelection}
          dataSource={data}
          pagination={{
            total: 1126,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 10,
            defaultCurrent: 1,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
            //     defaultPageSize: 10,
            //     showSizeChanger: true,
            //     pageSizeOptions: ["10", "20", "30"],
          }}
        />
      </div>
    </div>
  );
};

export default HomeContent;
