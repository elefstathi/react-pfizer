import CourseCardId from "./CourseCardId";
import { Spin, List, Typography } from "antd";
import FetchData from "../api/FetchData";
import API_BASE_URL from "../api/BaseApi";
const { Title } = Typography;

const Courses = ({ location }) => {
  return (
    <FetchData url={API_BASE_URL} resource="courses">
      {(data, isLoading) =>
        isLoading ? (
          <Spin size="large" />
        ) : (
          <div style={{padding: 30 }}>
          <Title level={2}>All Courses</Title>
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <CourseCardId course={item} />
              </List.Item>
            )}
          ></List>
          </div>
        )
      }
    </FetchData>
  );
};

export default Courses;
