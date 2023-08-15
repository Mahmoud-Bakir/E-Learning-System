import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const navigation = useNavigate();
  const clickHandler = () => {
    if (props.enabled) {
      alert(props);
      localStorage.setItem("course_id", props.k)
      navigation(props.navig);
    }
  };

  return (
    <button
      className={`roundedMedium baseButton pointer ${props.color} ${props.textColor}`}
      onClick={() => clickHandler()}
    >
      {props.text}
    </button>
  );
};

export default Button;
