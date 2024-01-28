import React from 'react'
import './home.css'
function Home() {
  return (
    <>
    <div className='back d-flex flex-column w-100' style={{height:'600px'}}>
        <div className='d-flex justify-content-end w-100 mt-1'>
            <div ><button style={{height:'30px',width:'140px'}} className='btn btn-info'><i className="fa-regular fa-message me-1"></i>Apply NOW</button></div>
            <div><button  style={{height:'30px',width:'140px'}}  className='btn btn-primary'><i className="fa-solid fa-house me-1"></i>My MU</button></div>

        </div>
        <div className=' d-flex justify-content-between'>
          <div className='ms-4'>  <img src="https://muscat-university.vercel.app/images/mu-logo.png" alt="" style={{height:'40px'}} /></div>
          <div className='navfullscreen text-light me-4 mt-3 '>
            <div className='me-4'>HOME /</div>
            <div className='me-4'>STUDY /</div>
            <div className='me-4'>ADMISSIONS /</div>
            <div className='me-4'>FACULTY /</div>
            <div className='me-4'>LIFE AT MU /</div>
            <div className='me-4'>FAQ /</div>
            <div className='me-4'>العربية</div>
          </div>
        </div>
        <hr className='text-light'/>
        <div className='d-flex  justify-content-end align-items-center w-100 text-light' style={{height:'100%'}}>
           <div className='d-flex flex-column'>
           <div>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-facebook"></i></button>
           </div>
           <div className='mt-3'>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-instagram"></i></button>
           </div>
           <div  className='mt-3'>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-linkedin"></i></button>
           </div>
           <div  className='mt-3'>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-youtube"></i></button>
           </div>
           <div  className='mt-3'>
          <button className='btn btn-outline-light ' style={{borderRadius:'50%'}}> <i className="fa-brands fa-twitter"></i></button>
           </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Home