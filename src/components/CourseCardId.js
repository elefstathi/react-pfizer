import { Card, Typography, Row } from "antd";
import API_BASE_URL from "../api/BaseApi";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { green, red } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const { Text } = Typography;

const CourseCardId = (course) => {
  const courseRecord = course.course;
  const history = useHistory();
  
  const onHandleClicked = () => {
    history.push(`/courses_details/${courseRecord.id}`, courseRecord);
  };
  
  const btnStyle = {
    color: "#fff",
    background: "#005f6a",
    borderRadius: "5px",
    position: "absolute",
    flex: 1,
    width: 50,
    height: 30,
    bottom: 5,
    right: 20
  };

  return (
    <Card
      title={courseRecord.title}
      headStyle={{ flex: 1, flexShrink: 1 }}
      hoverable
      style={{ width: 290, height: 500 }}
      cover={courseRecord.imagePath && <img src={ courseRecord.imagePath.includes('http') ? courseRecord.imagePath : `${API_BASE_URL}${courseRecord.imagePath}`} />}
    >
      <Row>
        <Text>
          Price: <b>{courseRecord.price.normal}£</b> | Bookable:
        </Text>
        {courseRecord.open ? (
          <CheckOutlinedIcon style={{ color: green[500] }} />
        ) : (
          <ClearOutlinedIcon style={{ color: red[500] }} />
        )}
      </Row>
      <Text>
        Duration: <b>{courseRecord.duration}</b>
      </Text>
      <Row>
        <Text>
          Dates:<b>{courseRecord.dates.start_date}</b> -{" "}
          <b>{courseRecord.dates.end_date}</b>
        </Text>
      </Row>
      <button style={btnStyle} onClick={() => onHandleClicked()}>
        View
      </button>
    </Card>
  );
};

export default CourseCardId;
