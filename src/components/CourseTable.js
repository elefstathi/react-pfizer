import { Card, Spin, Table } from "antd";
import FetchData from "./FetchData";
import API_BASE_URL from "../api/BaseApi";
import CourseTableColums from "./CourseTableColums";

const CourseTable = () => {
  const renderTable = ( data ) => {
    return (
      <div style={containerStyle}>
        <Card
          size="small"
          title="Last 5 courses"
          style={cardStyle}
        >
          <Table columns={CourseTableColums} dataSource={data} pagination={false} ></Table>
          <br/>
          <div style={{display: "flex"}}>
            <button style={btnStyle} onClick={() => getCourses(true)}>View All</button>
          </div>
        </Card>
      </div>
    );
  };

  const getCourses = (all) => {
    console.log('flag=', all);
    return (
      <FetchData url={API_BASE_URL} resource="courses">
        {(data, isLoading) =>
          isLoading ? (
            <Spin size="large" />
          ) :
            <>
            {all 
              ? ( data.length >= 5 
              ? renderTable(data.slice(data.length - 5, data.length))
              : renderTable(data.slice(data.length - 4, data.length))
                ) 
              : renderTable(data)
            }
            </>
        }
      </FetchData>  
    )
  }

  return (
    getCourses(false)
  );
};

const btnStyle = { color: "#fff", background: "#005f6a", borderRadius: "5px", marginLeft: "auto" };
const containerStyle = { padding: "30px", background: "#fff" };
const cardStyle = { width: "100%" };

export default CourseTable;
