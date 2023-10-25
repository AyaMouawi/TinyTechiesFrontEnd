import React from 'react'
import '../AdminDashCSS/AdminDash.css';

const AdminDashAddcourse = () => {
  return (
    <div >
        <div className="cardiv">
    {/* <div className="transitionbtns">
        <input type="button" className="mainbuttons" value="ADD COURSE"/>
        <input type="button" className="mainbuttons" value="COURSE"/>


    </div> */}
    <div className="bgcard">
        <div className="inputsdiv">
            <form className="add">
                <input  type="text" className="inputfield" placeholder="Add course name"/><br/>
                <input  type="text" className="inputfield" placeholder="Add trainer name"/><br/>
                <input  type="text" className="inputfield" placeholder="Add course description"/><br/>
                <input type="date" className="inputfield" placeholder=" course start date"/><br/>
                <input type="date" className="inputfield" placeholder=" course end date"/><br/>
                <div className='AdminFileInputs'>
                <div className="Adminfile-upload">
            <label>Choose Image</label>
            <input type="file" className='inputfield AdminFile' accept='image/*'/>
        </div>
        
        <div className="Adminfile-upload">
            <label>Choose File</label>
            <input type="file" className='inputfield AdminFile'/>
        </div>
        </div>

                {/* <label className="checkbox" >Course available</label>
                <input type="checkbox" className="checkbox"/><br/> */}

             {/* <input type="button" className="buttons2" value="Upload image"/><br/> */}
                <input type="button" className="addcoursebutton" value="Add Course"/><br/>


            </form>

</div>
</div>
        </div>
    </div>

  )
}

export default AdminDashAddcourse