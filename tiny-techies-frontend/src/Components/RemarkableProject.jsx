import React from 'react'
import '../css/remarkableSection.css'
const RemarkableProject = () => {
  return (
      
      <div className='remarkable-card'>
       <img src="/Images/g4.png" alt="header" className='remarkable-card-image'/>
        <div className='remarkable-card-title'>
        <img src='/Images/g1.png' alt="beside name" className='remarkable-card-image-name'/>
        <div className='card-des'>
          <p className='card-title'>Sudent name</p>
          <p className='card-subTitle'>Project name</p>
          </div>
        </div>
        <div className='remarkable-card-subtitle'>
          <h4 className='remarkable-card-des'>SmallDesc Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        </div>
      </div>
    
  )
}

export default RemarkableProject
