import React from 'react'
import '../AdminDashCSS/AdminDash.css';
import {Link} from 'react-router-dom';
import { Router } from 'react-router-dom';


const AdminDashAddTrainer = () => {
  return (
    <div>
         
         <div className="cardiv">
        {/* <div className="transitionbtns">
            <input type="button" className="mainbuttons" value="Add trainer"/>
            <input type="button" className="mainbuttons" value="view trainers"/>


        </div> */}
        <div className="bgcard">
            <div className="inputsdiv">
                <form className="edit">
                    <input  type="text" className="inputfield" placeholder="Add Trainer name"/><br/>
                    <input  type="text" className="inputfield" placeholder="Add trainer email"/><br/>
                    <input  type="number" className="inputfield" placeholder="Add trainer age"/><br/>
                 
                    <label className="date">start date</label>
                    <input type="date" className="inputfield1" placeholder=" course start date"/><br/>
                    <label className="date">End date</label>
                    <input type="date" className="inputfield1" placeholder=" course end date"/><br/>
                  
            <label className="date">Choose Image</label>
            <input type="file" className='inputfield' accept='image/*'/>
                 <input type="button" className="addcoursebutton" value="Add Trainer" accept='image/*'/><br/>


                </form>


            </div>
        </div>
    </div>
    </div>
    
  )
}

export default AdminDashAddTrainer