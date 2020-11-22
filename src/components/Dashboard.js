import React, { useState } from "react";
import ReactDOM from "react-dom";
import WelcomeCard from "./welcome/WelcomeCard";
import Header from "./Header";
import { Layout } from "antd";
import "antd/dist/antd.css";

export default function Dashboard() {

  return (
    <Layout className="layout">
      <Header/>
      <WelcomeCard/>
    </Layout>
  );
}
