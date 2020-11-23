import { Card, Spin } from "antd";
import FetchData from "./FetchData";
import API_BASE_URL from "../api/BaseApi";

const CourseTableRow = () => {
  return (
    <FetchData url={API_BASE_URL} resource="courses">
      {(data, isLoading) =>
        isLoading ? (
          <Spin size="large" />
        ) : (
          data.slice(data.length - 5, data.length).map(({ course }) => (
            <div style={containerStyle} key={course}>
              <Card
                size="small"
                title="Last 5 courses"
                bordered={false}
                style={cardStyle}
              >
                <p>{course}</p>
              </Card>
            </div>
          ))
        )
      }
    </FetchData>
  );
};

const containerStyle = { padding: "30px", background: "#ececec" };
const cardStyle = { width: "60%" };

export default CourseTableRow;
