import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function JobSeekerView() {

    const [interview, setInterview] = useState([]);
    const [applicantId, setApplicantId] = useState("01");
    
    useEffect(()=>{

      retriveJobSeekerInterviews();

    },[]);

    const retriveJobSeekerInterviews = () => {
      axios.get(`http://localhost:5000/interview/getAll`).then((res) => {
            if(res.data.success){
              setInterview(res.data.exsitingInterview);
              console.log(res.data.exsitingInterview);
            }    
    });
  }
    
  return (
    <div>JobSeekerView</div>
  )
}
