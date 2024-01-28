import React from 'react'
import './home.css'
import { Col, Row } from 'react-bootstrap'

function Sectionsix() {
  return (
   <>
   <div className='addmargin ' style={{marginTop:'60px'}}><h3><span className='und'>SCHO</span>LARSHIPS</h3></div>
   <Row className='d-flex justify-content-evenly ms-5 '>
    <Col sm={12} lg={4} md={4} xl={4} className='mt-5 '>
    <div className='bg-primary text-center' style={{width:'35px',height:'35px',borderRadius:'50%'}}><i className="fa-solid fa-graduation-cap text-light "></i></div>
    <div className='mt-2'><p className='fw-bold'>Merit Based Scholorship</p></div>
    <div className=''><p className=''>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Repudiandae liberobr <br /> quisquam porro. Quas mollitia cum <br /> molestiae, suscipit at magni veniam, <br /></p></div>

    </Col>
    <Col sm={12} lg={4} md={4} xl={4} className='mt-5'>
    <div className='bg-primary text-center' style={{width:'35px',height:'35px',borderRadius:'50%'}}><i className="fa-solid fa-graduation-cap text-light "></i></div>
    <div className='mt-2'><p className='fw-bold'>Merit Based Scholorship</p></div>
    <div className=''><p className=''>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Repudiandae liberobr <br /> quisquam porro. Quas mollitia cum <br /> molestiae, suscipit at magni veniam, <br /></p></div>

    </Col><Col sm={12} lg={4} md={4} xl={4} className='mt-5'>
    <div className='bg-primary text-center' style={{width:'35px',height:'35px',borderRadius:'50%'}}><i className="fa-solid fa-graduation-cap text-light "></i></div>
    <div className='mt-2'><p className='fw-bold'>Merit Based Scholorship</p></div>
    <div className=''><p className=''>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Repudiandae liberobr <br /> quisquam porro. Quas mollitia cum <br /> molestiae, suscipit at magni veniam, <br /></p></div>

    </Col>
    
   </Row>
   <div className='d-flex justify-content-center mt-5'><u>Contact Us<i className="fa-solid fa-arrow-right ms-3 rounded "></i></u></div>

   </>
  )
}

export default Sectionsix