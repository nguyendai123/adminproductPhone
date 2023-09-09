import { React, useState, useEffect } from "react";
import { Transfer, Modal, Space, Popover, ConfigProvider } from "antd";

const DisplayAdjustment = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const filterOption = (inputValue, option) =>
    option.description.indexOf(inputValue) > -1;
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  const handleSearch = (dir, value) => {
    console.log("search:", dir, value);
  };
  return (
    <Modal
      title={
        <div
          direction="horizontal"
          style={{
            width: "720px",
            marginTop: "-14px",
            marginLeft: "-20px",
            marginRight: "58px",
            marginBottom: "50px",
            backgroundColor: "#F2F9FF",
            padding: "10px",
          }}
        >
          Điều chỉnh cột hiển thị
        </div>
      }
      centered
      open={open}
      width={750}
      bodyStyle={{ height: 805 }}
      footer={null}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
    >
      <Transfer
        listStyle={{ width: 343, height: 678 }}
        titles={["Thêm cột hiển thị", "Cột hiển thị"]}
        dataSource={mockData}
        showSearch
        filterOption={filterOption}
        targetKeys={targetKeys}
        onChange={handleChange}
        onSearch={handleSearch}
        render={(item) => item.title}
        oneWay
        style={{
          marginBottom: 16,
        }}
      />
    </Modal>
  );
};

export default DisplayAdjustment;
