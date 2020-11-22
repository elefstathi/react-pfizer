import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const AppHeader = () => (
  <Header className="header">
    <h2 style={{color: "#fff"}}>Code.Hub Dashboard</h2>
  </Header>
);

export default AppHeader;