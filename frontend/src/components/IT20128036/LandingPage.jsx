import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import image from '../../images/land.png';



export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Home"
  }
  render() {
    return (


      <div className="" style={{ minHeight: '100vh' }}>
        {/* <div className='jumbotron mt-5'> */}
          {/* <div align="center" className='col-sm-8 mx-auto'>
            <hr />
            <h1>Research Project Management Tool</h1>
            <hr /><br /><br />
          </div> */}

          <div className='mx-1 my-1' style={{ position: 'relative', textAlign: 'center' }}>
            <img src={image} class="img-fluid" alt="JOB4ME" style={{ minWidth: '100%', minHeight: '100vh', opacity: '0.7' }}></img>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              {/* <h1 class="display-5" style={{ fontFamily: 'Stencil Std, fantasy' }}><strong>JOB4ME</strong></h1>
              <p><strong>Single platform to make Recruitements,<br></br>applications and everything easier</strong></p> */}
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}
