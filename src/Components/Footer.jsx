import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
   <div className='text-light ' style={{backgroundColor:'darkblue'}}>
    <Row className='d-flex justify-content-center mt-5'>
    <Col className='d-flex flex-column mt-5 mb-5' sm={12} lg={3} md={3} xl={3}>
    <div>
        <h4><span className='und'>QUICK</span> CONTACT</h4>
    </div>
    <div className='d-flex mt-3'>
    <i className="fa-regular fa-envelope me-2 mt-1"></i>Email
    </div>
    <div><p className='ms-4'>info@muscatuniversity.com</p></div>
    <div className='d-flex mt-2'>
    <i className="fa-solid fa-phone me-2 mt-1"></i>For general queries
    </div>
    <div><p className='ms-4'>2464 5444</p></div>
    <div className='d-flex mt-2'>
    <i className="fa-solid fa-phone me-2 mt-1"></i>For programmes queries
    </div>
    <div><p className='ms-4'>2464 5456</p></div>
    <div className='d-flex mt-2'>
    <i className="fa-solid fa-share me-2 mt-1"></i>
    <div className='d-flex'>
           <div>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-facebook"></i></button>
           </div>
           <div className=''>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-instagram"></i></button>
           </div>
           <div  className=''>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-linkedin"></i></button>
           </div>
           <div  className=''>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-youtube"></i></button>
           </div>
           <div  className=''>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-twitter"></i></button>
           </div>
           </div>
           
    </div>
    
    </Col>
    <Col className='d-flex flex-column mt-5 mb-5' sm={12} lg={2} md={2} xl={2}>
    <div>
        <h4><span className='und'>STUDY AT</span>  MU</h4>

    </div>
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>


    </Col> 
    <Col className='d-flex flex-column mt-5 mb-5' sm={12} lg={2} md={2} xl={2}>
    <div>
        <h4><span className='und'>ADMISS</span>ION</h4>

    </div>
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>


    </Col> 
    <Col className='d-flex flex-column mt-5 mb-5' sm={12} lg={2} md={2} xl={2}>
    <div>
        <h4><span className='und'>FACCULT</span>IES</h4>

    </div>
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>


    </Col>
    <Col className='d-flex flex-column mt-5 mb-5' sm={12} lg={2} md={2} xl={2}>
    <div>
        <h4><span className='und'>LIFE AT</span>MU</h4>

    </div>
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>
    <hr />
    <div><p>Pathway Programmes</p></div>


    </Col>
   </Row>
   <div className='mt-5 d-flex justify-content-between'>
    <div className='ms-5'><p>Copyright 2023 All Rights Reserved | MU Privacy Policy</p></div>
    <div><img className='me-3' style={{width:'130px'}}  src="https://muscat-university.vercel.app/images/2040-logo.png" alt="" />
    <img className='me-3' style={{width:'100px'}} src="https://muscat-university.vercel.app/images/edu-logo.png" alt="" /></div>
    
   </div>
   </div>
  )
}

export default Footer