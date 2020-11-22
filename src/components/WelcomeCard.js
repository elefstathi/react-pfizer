import { Card } from "antd";
import "antd/dist/antd.css";

export default function WelcomeCard() {
  return (
    <div style={containerStyle}>
      <Card
        title="Welcome to Code.Hub Dashboard!"
        bordered={false}
        style={cardStyle}
      >
        <p>Manage everything and have fun!</p>
      </Card>
    </div>
  );
}

const containerStyle = { padding: "30px", background: "#fff" };
const cardStyle = { width: "100%", backgroundColor: "#ececec", textAlign: "center" };
