import { Table, Space, Spin } from "antd";
import FetchData from "./FetchData";
import API_BASE_URL from "../api/BaseApi";

const CourseTable = () => {

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>View Details {record.name}</a>
        </Space>
      ),
    },
  ];

  return (
    <FetchData url={API_BASE_URL} resource="courses">
      {(data, isLoading) =>
        isLoading ? (
          <Spin size="large" />
        ) : (
          <Table columns={columns} dataSource={data}></Table>
        )
      }
    </FetchData>
  );
};

export default CourseTable;
