import React, { useState,useEffect } from 'react'
import "./style.css";
import { useNavigate } from 'react-router-dom';
import sendRequest from '../../pages/Student/Core/config/request'
import requestMethods from '../../pages/Student/Core/enums/requestMethods'

const Button = (props) => {

  const navigation = useNavigate();
  const clickHandler = () => {
    if (props.enabled) {
      localStorage.setItem("course_id", props.k)
      if(props.enroll){
        props.enroll()
      }
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
