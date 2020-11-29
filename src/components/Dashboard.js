import React from "react";
import WelcomeCard from "./WelcomeCard";
import { Layout, Row, Spin } from "antd";
import "antd/dist/antd.css";
import StatisticItem from "./StatisticItem";
import FetchData from "../api/FetchData";
import CourseTable from "./CourseTable";
import API_BASE_URL from "../api/BaseApi";
import HeaderComponent from "./Header";

export default function Dashboard({ match, location }) {
  return (
    <Layout>
      <HeaderComponent />
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
    </Layout>
  );
}

const rowStyle = { padding: "30px", background: "#fff" };
