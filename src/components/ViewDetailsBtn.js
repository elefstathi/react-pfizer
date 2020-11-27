import { useState } from "react";
import { useHistory } from "react-router-dom";

const ViewDetailsBtn = ({ record }) => {
  const [btnColor, setColor] = useState("#005f6a");
  const history = useHistory();

  const onHandleClicked = () => {
    setColor("#6a0b00");
    console.log(btnColor);
    history.push(`/courses_details/${record.id}`, record);
  };
  const btnStyle = {
    color: "#fff",
    background: btnColor,
    borderRadius: "5px",
  };

  return (
    <button style={btnStyle} onClick={() => onHandleClicked()}>
      View Details
    </button>
  );
}

export default ViewDetailsBtn;
