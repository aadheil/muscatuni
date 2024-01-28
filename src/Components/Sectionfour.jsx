import React from 'react'
import './home.css'
import { Col, Row } from 'react-bootstrap'

function Sectionfour() {
  return (
    <div className=' d-flex w-100 flex-column' style={{height:'100%'}}>
        <div className='addmargin mt-5 ' ><h3 className=' '><span className='und'>ADMI</span>SSION REQUIREMENTS</h3></div>
        <div className='addmargin d-flex  w-100 mt-5'  >
            <div className=' text-light' style={{width:'500px',height:'40px',backgroundColor:'darkblue'}}><div><i className="fa-regular fa-pen-to-square ms-2 me-2"></i>Under graduate Admission Requirements</div>
            </div>
            <div className='bg-light text-primary border' style={{width:'500px',height:'40px'}}><div><i className="fa-regular fa-pen-to-square ms-2 me-2"></i>Post graduate Admission Requirements</div>
            </div>
        </div>
        <div className='addmargin mt-3 d-flex  w-100 ' >
            <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic a, voluptate totam excepturibr  dolorem placeat  atque quaerat<br /> harum eveniet quae unde id at non! Provident, repudiandae.</p>
        </div>
        <hr />
        <div className='mt-3 addmargin'>
            <h4>Program Specific Requirements</h4>
        </div>
        <div className='addmargin'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero, dolorem deserunt autem odio provident magni ut quos totam quasi <br />eos labore voluptate enim nemo temporibus. Harum, quam cupiditate. Ipsa.</p>
        </div>
        <hr />
        <div className='mt-3 addmargin'>
            <h4>Supporting Documents</h4>
        </div>
        <div className=' addmargin'>
           <p>To complete your application , please ensure the folllowing documents</p>
        </div>
        
        <div className='addmargin'>
            <ol>
                <li> <p><span className='fw-bold'>School Leaving Certificates:</span> Submit certificates that you meet the minimal educational requirements</p></li>
                <li> <p><span className='fw-bold'>School Leaving Certificates:</span> Submit certificates that you meet the minimal educational requirements</p></li>
                <li> <p><span className='fw-bold'>School Leaving Certificates:</span> Submit certificates that you meet the minimal educational requirements</p></li>
                
            </ol>
           
        </div>
        <div className='addmargin mt-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero, dolorem deserunt autem odio provident magni ut quos totam quasi <br />eos labore voluptate enim nemo temporibus. Harum, quam cupiditate. Ipsa.</p>
        </div>
        <hr />
        <div className='addmargin mb-5'>
            <p><span className='fw-bold'>Note: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero, dolorem deserunt autem odio provident magni ut quos totam quasi <br />eos labore voluptate enim nemo temporibus. Harum, quam cupiditate. Ipsa.</p>
        </div>
        <Row className='addmargin mt-5 '>
            <Col sm={12} md={6} xl={6} lg={6}><div className='d-flex flex-column'>
            <div className='' ><h3 className=' '><span className='und'>TRAN</span>SFER STUDENTS</h3></div>
          <div className='bg-light shadow '>  <div className='bghere ms-2 mt-2'>
            <div className='mt-2' ><h6 className=' '>MOHERI Transfer Requests</h6></div>
            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, nostrum iure aliquam iusto unde, laudantium deserunt ullam dolor, in aperiam vel! Dolorum saepe, reiciendis maiores placeat eveniet quasi atque suscipit!</p></div>
            <div className='d-flex'><u>Transfer Applicatio Process<i className="fa-solid fa-arrow-right ms-3 rounded "></i></u></div>


            </div>
            <div className='bghere mt-4 ms-2 m-2 '>
            <div className='mt-2' ><h6 className=' '>Self-Sponsored Transfer Students</h6></div>
            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, nostrum iure aliquam iusto unde, laudantium deserunt ullam dolor, in aperiam vel! Dolorum saepe, reiciendis maiores placeat eveniet quasi atque suscipit!</p></div>
            <div className='d-flex'><u>Transfer Application Process<i className="fa-solid fa-arrow-right ms-3 rounded "></i></u></div>


            </div></div>
                </div></Col>
            <Col sm={12} md={6} xl={6} lg={6} className='mb-5'>
                <img src="https://muscat-university.vercel.app/_next/static/media/partners-bg.05c83515.jpg" alt="" style={{width:'450px',height:'360px'}} className='ms-5' />
            </Col>

        </Row>
      
    </div>
  )
}

export default Sectionfour