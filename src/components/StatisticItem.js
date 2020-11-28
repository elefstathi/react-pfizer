import { Col, Row } from "antd";

const StatisticItem = ({ title, amount }) => {
  return (
    <Col className="gutter-row" span={6} style={colStyle}>
      <Row style={rowStyle}>
        <div style={titleStyle}>{title.toUpperCase()}: &nbsp;</div>
        <div style={amountStyle}>{amount} </div>
      </Row>
    </Col>
  );
};

const titleStyle = { padding: "6px 0"};
const amountStyle = { padding: "6px 0", background: "#3b3b3b", color: '#fff' };
const rowStyle = { padding: "4px 0", justifyContent: 'center'};
const colStyle = {
  border: "2px solid #ececec",
  textAlign: "center",
  borderRadius: "5px"
};

export default StatisticItem;
