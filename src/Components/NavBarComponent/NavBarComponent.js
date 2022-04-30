// import { Component } from "react";
import "../../Pages/HomePage.scss";
import "./NavBarComponent.scss";
import { Link } from 'react-router-dom';


function NavBarComponent(props) {
  const addTextArea = {
    id: `${props.noOfItems}paragraph`,
    type: "textarea",
    content: ""
  }
  
  
  const handleOnClickNewEntry = () => {
    props.stateFunc(addTextArea)
  }

  const handleOnClickSearch = () => {
    props.searchFunc(true)
  }
  
  return (
    <div className="navigation">
      
      <ul className="links">
        <li onClick={() => {handleOnClickNewEntry()}}>
            Add New entry
        </li>
        <li onClick={() => {handleOnClickSearch()}}>
            Add an entertainment
        </li>
        <li>
            <Link  className="home" to="/" >Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponent;
