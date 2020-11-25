import CourseCardId from "./CourseCardId";
import { Typography, Row } from "antd";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { green, red } from "@material-ui/core/colors";

const { Title, Text } = Typography;

const CoursesDetails = ({ location, course }) => {
  console.log(course);
  const {
    title,
    id,
    description,
    duration,
    dates,
    imagePath,
    open,
    price,
  } = course;
  const rowStyle = { flex: 1, justifyContent: "space-between", marginRight: 5 };
  return (
    <>
      <div style={{padding: 30}}>
        <Title level={2}>
          {title}
          {id}
        </Title>
        <Row style={rowStyle}>
          <Text>Price: {price.normal}£</Text>
          <Text>Duration: {duration}</Text>
        </Row>
        <Row style={rowStyle}>
          <Text>
            Bookable:{" "}
            {open ? (
              <CheckOutlinedIcon style={{ color: green[500], height: 18 }} />
            ) : (
              <ClearOutlinedIcon style={{ color: red }} />
            )}
          </Text>
          <Text>
            Dates: {dates.start_date} - {dates.end_date}
          </Text>
        </Row>
        {description}
        <Text>
          Participant's registration (payment's completion) implies full
          compliance af Code.Learn Terms & Conditions.
        </Text>
      </div>
    </>
  );
};

export default CoursesDetails;
