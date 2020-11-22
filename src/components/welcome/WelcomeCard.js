import { Card } from "antd";
import "antd/dist/antd.css";
import "./Welcome.css";

export default function WelcomeCard() {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Welcome to Code.Hub Dashboard!"
        bordered={false}
        style={{ width: "100%", backgroundColor: "#ececec", textAlign: "center" }}
      >
        <p>Manage everything and have fun!</p>
      </Card>
    </div>
  );
}
