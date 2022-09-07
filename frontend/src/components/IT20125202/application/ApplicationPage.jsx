import React from "react";
import NavBar from "../../IT20128036/NavBar";
import Form from "./Form";

export default function ApplicationPage() {
  return (
    <React.Fragment> 
      <NavBar />
      <br />
      <h1 style={{textAlign: "center"}}> Application </h1>
      <Form/> 
      
    </React.Fragment>
    
  );
}
