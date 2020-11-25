import React, { useState } from "react";
import WelcomeCard from "./WelcomeCard";
import { Layout, Menu, Row, Spin, Typography } from "antd";
import "antd/dist/antd.css";
import StatisticItem from "./StatisticItem";
import CoursesDetails from "./CoursesDetails";
import Courses from "./Courses";
import FetchData from "./FetchData";
import CourseTable from "./CourseTable";
import API_BASE_URL from "../api/BaseApi";
import { useHistory } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

export default function Dashboard({ match, location }) {
  const history = useHistory();
  const onHandleShowCourses = () => {
    history.push("/courses");
  };

  return (
    <Layout>
      <Header style={{ flex: 1}}>
        <Row>
          <h2 style={{ color: "#fff" }}>Code.Hub Dashboard</h2>
          <Menu theme="dark" mode="horizontal" style={{flex:1}}>
            <Menu.Item key="1" onClick={() => onHandleShowCourses()}>
              <Text style={{ color: "#fff" }}>Courses</Text>
            </Menu.Item>
            <Menu.Item key="2">
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
    </Layout>
  );
}

const rowStyle = { padding: "30px", background: "#fff" };
