import { Card, Spin, Table } from "antd";
import FetchData from "../api/FetchData";
import API_BASE_URL from "../api/BaseApi";
import { courseTableColumns } from "./CourseTableColumns";
import { useState } from "react";

const CourseTable = () => {
  const columns = courseTableColumns();
  const [viewAll, setFlag] = useState(false);
  
  const renderTable = ( data ) => {
    return (
      <div style={containerStyle}>
        <Card
          size="small"
          title={viewAll ? "All courses" : "Last 5 courses"}
          style={cardStyle}
        >
          <Table columns={columns} dataSource={data} pagination={false} ></Table>
          <br/>
          <div style={{display: "flex"}}>
            <button style={btnStyle} onClick={() => getAllCourses()}>View All</button>
          </div>
        </Card>
      </div>
    );
  };

  const getLastCourses = () => {
    return (
      <FetchData url={API_BASE_URL} resource="courses">
        {(data, isLoading) =>
          isLoading ? (
            <Spin size="large" />
          ) :
            <>
            { viewAll ? renderTable(data) 
              : data.length >= 5 
              ? renderTable(data.slice(data.length - 5, data.length))
              : renderTable(data.slice(data.length - 4, data.length))
            }
            </>
        }
      </FetchData>  
    )
  }

  const getAllCourses = () => {
    setFlag(true);
    getLastCourses();
  }

  return (
    getLastCourses()
  );
};

const btnStyle = { color: "#fff", background: "#005f6a", borderRadius: "5px", marginLeft: "auto" };
const containerStyle = { padding: "30px", background: "#fff" };
const cardStyle = { width: "100%" };

export default CourseTable;
