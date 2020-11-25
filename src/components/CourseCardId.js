import { Card, Typography, Row } from "antd";
import API_BASE_URL from "../api/BaseApi";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { green, red } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const { Text } = Typography;

const CourseCardId = (course) => {
  const record = course.course;
  const history = useHistory();

  const onHandleClicked = () => {
    history.push(`/courses_details/${record.id}`, record);
  };
  const btnStyle = {
    color: "#fff",
    background: "#005f6a",
    borderRadius: "5px",
    position: "absolute",
    width: 50,
    height: 30,
    bottom: 5,
    right: 20,
    zIndex: 100,
  };

  return (
    <Card
      title={record.title}
      headStyle={{ flex: 1, flexShrink: 1 }}
      hoverable
      style={{ width: 290, height: 500 }}
      cover={<img src={`${API_BASE_URL}/${record.imagePath}`} />}
    >
      <Row>
        <Text>
          Price: <b>{record.price.normal}£</b> | Bookable:
        </Text>
        {record.open ? (
          <CheckOutlinedIcon style={{ color: green[500] }} />
        ) : (
          <ClearOutlinedIcon style={{ color: red }} />
        )}
      </Row>
      <Text>
        Duration: <b>{record.duration}</b>
      </Text>
      <Row>
        <Text>
          Dates:<b>{record.dates.start_date}</b> -{" "}
          <b>{record.dates.end_date}</b>
        </Text>
      </Row>
      <button style={btnStyle} onClick={() => onHandleClicked()}>
        View
      </button>
    </Card>
  );
};

export default CourseCardId;
