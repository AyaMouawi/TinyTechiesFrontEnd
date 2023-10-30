import React from 'react'
import '../AdminDashCSS/AdminDash.css';


const AdminDashCourses = () => {
  
  return (
    <div>
        
        <div className="cardiv">
    {/* <div className="transitionbtns">
        <input type="button" className="mainbuttons" value="ADD COURSE"/>
        <input type="button" className="mainbuttons" value="COURSE"/>


    </div> */}
    <div className="bgcardcourses">
        <div className="inputsdivcourses">
           <table border="1" className="tbcourse">
            <tr>
                <th>Course Name</th>
                <th>Trainer Name</th>
                <th>Course Description</th>
                <th>Course file</th>
                <th> Course Image</th>
                <th>Start date</th>
                <th>End date</th>
               
        
                <th>Delete</th>
            </tr>
            <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
            
                <td>{}</td>
                <td>{}</td>
           
                <td><button><img src="delete.PNG" className="imgedit"/></button></td>
            </tr>
            

           </table>

        </div>
    </div>
</div></div>

  )
}

export default AdminDashCourses