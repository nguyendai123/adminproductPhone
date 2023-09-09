import { React, useState, useEffect } from "react";
import { Modal, Dropdown, Space, Input, Button } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  EllipsisOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./Filter.scss";
import FilterSelect from "./FilterSelect/FilterSelect";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        <MenuOutlined />
        <span> Lọc theo trạng thái</span>
        <EllipsisOutlined />
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        <MenuOutlined />
        <span> Lọc theo ngày tạo hôm nay</span>
        <EllipsisOutlined />
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        style={{ width: "573px" }}
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        <MenuOutlined />
        <span>Lọc theo tag iPhone</span>
        <EllipsisOutlined />
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <div>
        <MenuOutlined />
        <span> Lọc theo người tạo</span>

        <EllipsisOutlined />
      </div>
    ),
  },
];

const Filter = () => {
  const [open, setOpen] = useState(true);
  const [openSave, setOpenSave] = useState(false);
  const showModal = () => {
    setOpenSave(true);
  };
  const hideModal = () => {
    setOpenSave(false);
  };
  return (
    <>
      <Modal
        title={
          <div
            direction="horizontal"
            style={{
              width: "720px",
              marginTop: "-14px",
              marginRight: "58px",
              marginBottom: "50px",
              padding: "10px",
              borderBottom: "1px solid #E0E6ED",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            Bộ lọc
          </div>
        }
        centered
        open={open}
        width={410}
        bodyStyle={{ height: 805 }}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <div className="search-fiter">
          <SearchOutlined style={{ backgroundColor: "#F4F4F4" }} />
          <input
            style={{
              width: "400px",
              border: "none",
              backgroundColor: "#F4F4F4",
            }}
            placeholder="Tìm kiếm bộ lọc"
          />
        </div>
        <div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            trigger={["click"]}
          >
            <Space style={{ color: "#007AFF", width: "360px" }}>
              <FilterOutlined />
              <span>Bộ lọc đã lưu</span>
            </Space>
          </Dropdown>
        </div>
        <div>
          <FilterSelect characteristic={"Trạng thái"} />
          <FilterSelect characteristic={"Danh mục"} />
          <FilterSelect characteristic={"Người tạo"} />
          <FilterSelect characteristic={"Tag"} />
        </div>
        <hr style={{ marginTop: "380px" }} />
        <Space style={{ display: "flex", marginLeft: "105px", gap: "10px" }}>
          <Button danger style={{ width: "85px", height: "35px" }}>
            Huy
          </Button>
          <Button
            onClick={showModal}
            type="primary"
            style={{ width: "85px", height: "35px" }}
          >
            Loc
          </Button>
        </Space>
      </Modal>
      <Modal
        width={410}
        title="Lưu bộ lọc"
        open={openSave}
        footer={null}
        onOk={() => setOpenSave(false)}
        onCancel={() => setOpenSave(false)}
      >
        <Input
          size="large"
          style={{ margin: "30px 0 10px 0" }}
          placeholder="Nhập tên bộ lọc"
        />
        ;
        <Space style={{ display: "flex", marginLeft: "105px", gap: "10px" }}>
          <Button danger style={{ width: "85px", height: "35px" }}>
            Huy
          </Button>
          <Button
            onClick={showModal}
            type="primary"
            style={{ width: "85px", height: "35px" }}
          >
            Luu
          </Button>
        </Space>
      </Modal>
    </>
  );
};

export default Filter;
