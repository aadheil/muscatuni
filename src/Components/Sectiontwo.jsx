import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css'
function Sectiontwo() {
  return (
    <div className='d-flex  align-items-center w-100' style={{height:'100%'}}>
        <Row className='d-flex justify-content-center w-100 mt-5 mb-5'>
            <Col sm={12} md={6} lg={4} xl={4}>
               <div className='d-flex '>
               <img src="https://muscat-university.vercel.app/_next/static/media/partners-bg.05c83515.jpg" alt="" style={{width:'150px',height:'250px'}} className='me-3' />
                <img src="https://muscat-university.vercel.app/_next/static/media/partners-bg.05c83515.jpg" alt="" style={{width:'150px',height:'250px'}} />
               </div>

            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className='ms-5'>
                <div className='d-flex flex-column'>
                    <div><p>WELCOME TO</p></div>
                    <div><h4><span className='und'>MUSC</span>AT UNIVERSITY ADMISSION</h4></div>
                    <div className='mt-3'>
                        <p className='fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minima, exercitationem corrupti ex adipisci facere ad? Veritatis adipisci ut harum eum officiis. Hic magnam, totam placeat inventore eveniet expedita delectus.</p>
                    </div>
                    <div className='mt-4'>
                        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minima, exercitationem corrupti ex adipisci facere a</p>
                    </div>
                </div>
            </Col>

        </Row>
    </div>
  )
}

export default Sectiontwo