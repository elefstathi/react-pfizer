import { Layout, Row, Menu, Typography } from "antd";
import { useHistory } from "react-router-dom";
const { Header } = Layout;
const { Text } = Typography;

const HeaderComponent = () => {

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
  );
};

export default HeaderComponent;
