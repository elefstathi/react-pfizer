import { Space } from 'antd';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { green, red } from '@material-ui/core/colors';
import ViewDetailsBtn from './ViewDetailsBtn';

export const courseTableColumns = () => {
  const columns = [
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
            <ViewDetailsBtn record={record}/>
        </Space>
      ),
    },
  ];

  const checkIcon= (open) => (
    <> {
      open 
      ? <CheckOutlinedIcon style={{ color: green[500] }}/> 
      : <ClearOutlinedIcon style={{ color: red }}/> 
      }
    </>
  )
  const textStyle = { color: "#000" };

  return columns;
}
