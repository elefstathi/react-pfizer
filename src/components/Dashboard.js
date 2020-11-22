import React, {useState } from "react";
import WelcomeCard from "./WelcomeCard";
import Header from "./Header";
import { Layout, Menu, Row, Spin} from "antd";
import "antd/dist/antd.css";
import StatisticItem from "./StatisticItem";
import FetchData from "./FetchData";
import CourseTable from "./CourseTable";
import API_BASE_URL from "../api/BaseApi";

export default function Dashboard() {

  return (
    <Layout className="layout">
      <Header />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Courses</Menu.Item>
        <Menu.Item key="2">Add new course</Menu.Item>
      </Menu>
      <WelcomeCard />
      <Row style={rowStyle}>
      <FetchData
        url={API_BASE_URL}
        resource="stats"
      >
        {(data, isLoading) =>
          isLoading ? (
            <Spin size="large" />
          ) : (
            data.map(({ id, title, amount}) => (
              <StatisticItem type="inner" key={id} title={title} amount={amount}/>
            ))
          )
        }
      </FetchData>
      </Row>
        <CourseTable/>
    </Layout>
  );
}

const rowStyle = { padding: "30px", background: "#fff" };
