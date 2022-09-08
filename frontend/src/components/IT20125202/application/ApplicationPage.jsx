import React from "react";
import NavBar from "../../IT20128036/NavBar";
import Form from "./Form";
import image from "../../../images/background.png";

export default function ApplicationPage() {
  return (
    <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh' }}>
      <NavBar />
      <div className='jumbotron' style={{ background: 'white', borderTop: '5px solid black', minHeight: '100vh' }}>
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}> Application </h1>
        <Form />

      </div>
    </div>

  );
}
