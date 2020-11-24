import { useHistory } from "react-router-dom";

function ViewDetailsBtn({ record }) {
  console.log(record);
  const history = useHistory();
  const onHandleClicked = () => {
    history.push(`/courses_details/${record.id}`, record);
  };
  const btnStyle = {
    color: "#fff",
    background: "#005f6a",
    borderRadius: "5px",
  };

  return (
    <button style={btnStyle} onClick={() => onHandleClicked()}>
      View Details
    </button>
  );
}

export default ViewDetailsBtn;
