import React from 'react'
import '../AdminDashCSS/AdminDash.css';


const AdminDashStudents = () => {
  return (
    <div className='AdminDashMainContainer'>
     
      <div className="cardiv">
      
    <div className="bgcardcourses">
        <div className="inputsdivcourses">
           <table border="1" className="tbcourse">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Course Name</th>
                <th>Absence</th>
            </tr>
            <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                
            </tr>
            

           </table>

        </div>
    </div>
</div></div>

  )
}

export default AdminDashStudents