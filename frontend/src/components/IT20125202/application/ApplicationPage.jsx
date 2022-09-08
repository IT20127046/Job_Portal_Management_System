import React from "react";
import NavBar from "../../IT20128036/NavBar";
import Form from "./Form";
import image from "../../../images/back1.jpg";

export default function ApplicationPage() {
  return (
    <div>
      <NavBar />
      <div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh', borderTop: '5px solid black' }}>
        <div className='jumbotron' style={{ background: 'white', minHeight: '100vh' }}>
          <br />
          <br />
          <h1 style={{ textAlign: "center" }}> Application </h1>
          <Form />

        </div>
      </div>
    </div>
  );
}
