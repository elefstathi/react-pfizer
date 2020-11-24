import { Space } from "antd";
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { green, red } from '@material-ui/core/colors';

const CourseTableColums = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a style={textStyle}>{text}</a>,
  },
  {
    title: "Bookable",
    dataIndex: "open",
    key: "open",
    render: (text) => checkIcon(text),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <a style={textStyle}>{text.normal}</a>,
  },
  {
    title: "Date",
    dataIndex: "dates",
    key: "dates",
    render: (text) => (
      <a style={textStyle}>
        {text.start_date} - {text.end_date}
      </a>
    ),
  },
  {
    title: "Actions",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <button style={btnStyle} onClick={() => viewCourseDetails(record)}>View Details {record.name}</button>
      </Space>
    ),
  },
];

var btnStyle = { color: "#fff", background: "#005f6a", borderRadius: "5px" };

const viewCourseDetails = (record) => {
  
};

const checkIcon= (open) => (
  <> {
     open 
     ? <CheckOutlinedIcon style={{ color: green[500] }}/> 
     : <ClearOutlinedIcon style={{ color: red }}/> 
     }
  </>
)

const textStyle = { color: "#000" };

export default CourseTableColums;
