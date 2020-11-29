import React from "react";
import WelcomeCard from "./WelcomeCard";
import { Layout, Menu, Row, Spin, Typography } from "antd";
import "antd/dist/antd.css";
import StatisticItem from "./StatisticItem";
import CoursesDetails from "./CoursesDetails";
import Courses from "./Courses";
import FetchData from "../api/FetchData";
import CourseTable from "./CourseTable";
import API_BASE_URL from "../api/BaseApi";
import { useHistory } from "react-router-dom";
import FormAddCourse from "./FormAddCourse";

const { Header } = Layout;
const { Text } = Typography;

export default function Dashboard({ match, location }) {
  const history = useHistory();
  const onHandleShowCourses = () => {
    history.push("/courses");
  };
  const onHandleAddCourse = () => {
    history.push("/add_new_course");
  }
  const onHandleShowDashboard = () => {
    history.push("/");
  }

  return (
    <Layout>
      <Header style={{ flex: 1}}>
        <Row>
          <div onClick={() => onHandleShowDashboard()}>
            <h2 style={{ color: "#fff" }}>Code.Hub Dashboard</h2>
          </div>
          <Menu theme="dark" mode="horizontal" style={{flex:1}}>
            <Menu.Item key="1" onClick={() => onHandleShowCourses()} style={{backgroundColor: "transparent"}}>
              <Text style={{ color: "#fff" }}>Courses</Text>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => onHandleAddCourse()} style={{backgroundColor: "transparent"}}>
              <Text style={{ color: "#fff" }}>Add new course</Text>
            </Menu.Item>
          </Menu>
        </Row>
      </Header>
      {location.pathname === "/" && (
        <>
          <WelcomeCard />
          <Row style={rowStyle}>
            <FetchData url={API_BASE_URL} resource="stats">
              {(data, isLoading) =>
                isLoading ? (
                  <Spin size="large" />
                ) : (
                  data.map(({ id, title, amount }) => (
                    <StatisticItem
                      type="inner"
                      key={id}
                      title={title}
                      amount={amount}
                    />
                  ))
                )
              }
            </FetchData>
          </Row>
          <CourseTable />
        </>
      )}
      {location.pathname === "/courses" && <Courses courses={location.state} />}
      {location.pathname.includes("/courses_details") && (
        <CoursesDetails course={location.state} />
      )}
      {location.pathname === "/add_new_course" && <FormAddCourse/>}
    </Layout>
  );
}

const rowStyle = { padding: "30px", background: "#fff" };
