import { Typography, Row, Layout, Spin, Col } from "antd";
import React, { useState, useEffect, useCallback } from "react";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import API_BASE_URL from "../api/BaseApi";
import { green, red } from "@material-ui/core/colors";
import axios from "axios";
import { useHistory } from "react-router-dom";

const { Title, Text } = Typography;
const { Content, Footer } = Layout;

const CoursesDetails = ({ location, course }) => {
  const [courseInstructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { title, id, description, duration, dates, imagePath, instructors, open, price} = course;

  const editStyle = { color: "#fff", background: "#002BC6", borderRadius: "5px",
  };
  const deleteStyle = { color: "#fff", background: "#DB1F2A", borderRadius: "5px",
  };
  const rowStyle = { flex: 1, justifyContent: "space-between", marginRight: 5 };

  const fetchInstructors = useCallback(() => {
    setError(false);
    setIsLoading(true);

    axios
      .get(`${API_BASE_URL}/instructors`)
      .then((response) => {
        const newData = filterInstructors(response.data);
        setInstructors(newData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchInstructors();
  }, [fetchInstructors]);

  const filterInstructors = (data) => {
    return instructors.map((id) => data.filter((item) => item.id === id ) );
  }

  const handleEdit = () => {
    const objData = { title, id, description, duration, dates, imagePath, instructors, open, price};
    console.log(objData);
    history.push('/add_new_course', objData);
  } 

  const renderCourseDetail = () => {
    return (
      <>
        <div style={{ padding: 30 }}>
          <Title level={2}>
            {title}({id})
          </Title>
          <Layout>
            <Content
              style={{
                margin: "24px 16px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
             { imagePath && (<img
                style={{ width: "50%", height: "40%" }}
                src={`${API_BASE_URL}/${imagePath}`}
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
                    <ClearOutlinedIcon style={{ color: red }} />
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
                <button
                  style={deleteStyle}
                  onClick={() => console.log("delete")}
                >
                  Delete
                </button>
              </Row>
              <Title level={2}>Instructors</Title>
                {courseInstructors.map((item) => renderInstructors(item[0]))}
            </Footer>
          </Layout>
        </div>
      </>
    );
  };

  const renderInstructors = (instructor) => {
    return (
        <>
        <Title level={3}>
            {instructor.name.first} {instructor.name.last} ({instructor.dob})
        </Title>
        <Text>Email: {instructor.email} | </Text>
        <a target="_blank" href={instructor.linkedin}>Linkedin</a><br/>
        <Text>{instructor.bio}</Text>
        </>
    );
  };

  return isLoading ? <Spin size="large" /> : renderCourseDetail();
};

export default CoursesDetails;
