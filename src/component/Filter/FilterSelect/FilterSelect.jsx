import { React, useState, useEffect } from "react";
import {
  Transfer,
  Modal,
  Dropdown,
  Space,
  Popover,
  ConfigProvider,
  Input,
  Button,
  Select,
  Table,
  Tag,
} from "antd";
import {
  SearchOutlined,
  DownOutlined,
  FilterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  CloseOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./FilterSelect.scss";
const { Option } = Select;
import { Checkbox, Divider } from "antd";

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
      <a target="_blank" rel="noopener noreferrer" href="#">
        <MenuOutlined />
        <span> Lọc theo người tạo</span>
        <EllipsisOutlined />
      </a>
    ),
  },
];
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  //   {
  //     key: 1,
  //     label: "Ngừng giao dịch",
  //     value: "Ngừng giao dịch",
  //   },
  //   {
  //     key: 2,
  //     label: "Đang giao dịch",
  //     value: "Đang giao dịch",
  //   },
  "Đang giao dịch",
  "Ngừng giao dịch",
];
const defaultCheckedList = [
  //   {
  //     key: 1,
  //     label: "Ngừng giao dịch",
  //     value: "Ngừng giao dịch",
  //   },
  //   {
  //     key: 2,
  //     label: "Đang giao dịch",
  //     value: "Đang giao dịch",
  //   },
  "Đang giao dịch",
  "Ngừng giao dịch",
];

const FilterSelect = ({ characteristic }) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const [statusNumber, setStatusNumber] = useState(2);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [selectedOptions, setSelectedOptions] = useState([""]);
  const [dirty, setDirty] = useState(false);
  const [checked, setChecked] = useState(true);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (value) => {
    checked
      ? setSelectedOptions(["Ngừng giao dịch", "Đang giao dịch"])
      : setSelectedOptions([""]);
    setDirty(false);
    setChecked(!checked);

    console.log("Select Changed");
  };
  const onSelectChange = (newSelectedRowKeys) => {
    var obj = options.find(function (element) {
      return element.key === 4;
    });
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const options = [
    {
      label: <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />,
    },
    {
      key: 4,
      label: (
        <>
          {" "}
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={false}
          >
            Check all
          </Checkbox>
          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </>
      ),

      //   value: "Đang giao dịch",
    },

    {
      key: 3,
      value: "Ngừng giao dịch",
    },
  ];

  const handleChange = (value) => {
    setSelectedOptions(value);
    setDirty(true);
    console.log("Select Changed");
  };
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        className="buttonstatus"
        color={"#F2F9FF"}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
          borderRadius: "20px",
          border: "1px solid #007AFF",
          color: "#000",
          height: "25px",
        }}
      >
        <span>{value}</span>
      </Tag>
    );
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: " center",
        }}
      >
        <Space>
          <DownOutlined />
          <p>{characteristic}</p>
        </Space>
        <div className="statusnumber">Đã chọn {statusNumber}</div>
      </div>
      <div>
        {/* <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          placeholder="select one country"
          optionLabelProp="label"
        >
          <Option value="Đang giao dịch" label="Đang giao dịch">
            <Space>
              <span> Đang giao dịch</span>
            </Space>
          </Option>
          <Option value="Ngừng giao dịch" label="Ngừng giao dịch">
            <Space>
              <span> Ngừng giao dịch</span>
            </Space>
          </Option>
        </Select> */}
        {/* <Select
          mode="multiple"
          tagRender={tagRender}
          style={{
            width: "100%",
          }}
          options={options}
        /> */}
        <Select
          //@ts-ignore
          onChange={handleChange}
          onMouseDown={(e) => {
            setDirty(false);
            console.log("Select Clicked");
            e.stopPropagation();
          }}
          mode="multiple"
          tagRender={tagRender}
          style={{
            width: "100%",
          }}
          options={[
            {
              label: (
                <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
              ),
            },
            {
              value: "Đang giao dịch1",
              label: (
                <>
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    onClick={(e) => {
                      if (dirty) {
                        e.stopPropagation();
                      }
                      setDirty(false);
                      console.log("Check Clicked123");
                    }}
                  >
                    Check all
                  </Checkbox>
                  <Divider />
                </>
              ),
            },
            {
              value: "Đang giao dịch",
              label: (
                <Checkbox
                  onClick={(e) => {
                    if (dirty) {
                      e.stopPropagation();
                    }
                    setDirty(false);
                    console.log("Check Clicked");
                  }}
                  checked={
                    Array.isArray(selectedOptions)
                      ? selectedOptions.includes("Đang giao dịch")
                      : false
                  }
                >
                  Đang giao dịch
                </Checkbox>
              ),
            },
            {
              value: "Ngừng giao dịch",
              label: (
                <Checkbox
                  onClick={(e) => {
                    if (dirty) {
                      e.stopPropagation();
                    }
                    setDirty(false);
                    console.log("Check Clicked");
                  }}
                  checked={
                    Array.isArray(selectedOptions)
                      ? selectedOptions.includes("Ngừng giao dịch")
                      : false
                  }
                >
                  Ngừng giao dịch
                </Checkbox>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterSelect;
