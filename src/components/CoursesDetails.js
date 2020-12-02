import { Typography, Row, Layout, Spin, Modal, Button } from "antd";
import React, { useState } from "react";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import API_BASE_URL, { API_INSTRUCTORS, API_COURSES } from "../api/BaseApi";
import { green, red, blue } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { useApiCall } from "../hooks/useApiCall";
import HeaderComponent from "./Header";

const { Title, Text } = Typography;
const { Content, Footer } = Layout;

const CoursesDetails = () => {
  const [error, setError] = useState(null);
  const [show, setModal] = useState(false);
  const history = useHistory();
  const course = history.location.state;

  const {
    title,
    id,
    description,
    duration,
    dates,
    imagePath,
    instructors,
    open,
    price,
  } = course;
  const { sendData } = useApiCall(`${API_COURSES}/${id}`, "DELETE");
  const { data: respInstructors, isLoading } = useApiCall(API_INSTRUCTORS);

  const handleEdit = () => {
    history.push(`/edit_course/${id}`, course);
  };

  const handleDelete = async () => {
    try {
      const resp = await sendData();
      history.push("/courses");
    } catch {
      setError("ERROR IN DELETE");
      alert(error);
    }
  };

  const showModal = (e) => {
    setModal(true);
  };

  const handleCancel = (e) => {
    setModal(false);
  };

  const renderCourseDetail = () => {
    return (
      <>
        <Layout>
          <HeaderComponent />
          <div style={{ padding: 30 }}>
            <Title level={2}>
              {title}({id})
            </Title>
            <Content
              style={{
                margin: "24px 16px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {imagePath && (
                <img
                  style={{ width: "50%", height: "40%" }}
                  src={
                    imagePath.includes("http")
                      ? imagePath
                      : `${API_BASE_URL}${imagePath}`
                  }
                />
              )}
            </Content>
            <Footer>
              <Row style={rowStyle}>
                <Text>Price: {price.normal}£</Text>
                <Text>Duration: {duration}</Text>
              </Row>
              <Row style={rowStyle}>
                <Text>
                  Bookable:{" "}
                  {open ? (
                    <CheckOutlinedIcon
                      style={{ color: green[500], height: 18 }}
                    />
                  ) : (
                    <ClearOutlinedIcon style={{ color: red[500] }} />
                  )}
                </Text>
                <Text>
                  Dates: {dates.start_date} - {dates.end_date}
                </Text>
              </Row>
              <br />
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
              <Row>
                <button style={editStyle} onClick={handleEdit}>
                  Edit
                </button>
                <button style={deleteStyle} onClick={showModal}>
                  Delete
                </button>
              </Row>
              <Title level={2}>Instructors</Title>
              {respInstructors &&
                instructors
                  .map((id) => respInstructors.filter((item) => item.id === id))
                  .map((instructor) => renderInstructors(instructor[0]))}
            </Footer>
            <Modal
              title="Delete Course"
              visible={show}
              onOk={handleDelete}
              onCancel={handleCancel}
              footer={[
                <Button
                  key="back"
                  style={{ background: "#3b3b3b", color: "#fff" }}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  style={{ background: blue[900], color: "#fff" }}
                  onClick={handleDelete}
                >
                  Delete
                </Button>,
              ]}
            >
              <Text>Are you sure you want to delete "{title}" course?</Text>
            </Modal>
          </div>
        </Layout>
      </>
    );
  };

  const renderInstructors = (instructor) => {
    return (
      <div key={instructor.id}>
        <Title level={3}>
          {instructor.name.first} {instructor.name.last} ({instructor.dob})
        </Title>
        <Text>Email: {instructor.email} | </Text>
        <a target="_blank" href={instructor.linkedin}>
          Linkedin
        </a>
        <br />
        <Text>{instructor.bio}</Text>
      </div>
    );
  };

  return isLoading ? <Spin size="large" /> : renderCourseDetail();
};

export default CoursesDetails;

const editStyle = { color: "#fff", background: blue[900], borderRadius: "5px" };
const deleteStyle = {
  color: "#fff",
  background: red[500],
  borderRadius: "5px",
};
const rowStyle = { flex: 1, justifyContent: "space-between", marginRight: 5 };
