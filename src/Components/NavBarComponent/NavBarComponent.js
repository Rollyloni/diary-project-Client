// import { Component } from "react";
import "../../Pages/HomePage.scss";
import "./NavBarComponent.scss";

function NavBarComponent(props) {
  const addTextArea = {
    id: `${props.noOfItems}paragraph`,
    type: "textarea",
  }
  
  
  const handleOnClick = () => {
    props.stateFunc(addTextArea)
  }
  
  console.log(props)
  return (
    <div>
      
      <ul className="links">
        <li onClick={() => {handleOnClick()}}>
            Add New entry
        </li>
        <li>
            Add an entertainment
        </li>
        <li>
            Add a Description
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponent;
