import React from 'react'
import '../AdminDashCSS/AdminDash.css';


const AdminDashViewTrainers = () => {
  return (
    <div>
         
   <div className="cardiv">
        <div className="bgcardcourses">
            <div className="inputsdivcourses">
               <table border="1" className="tbcourse">
                <tr>
                    <th>Trainer Name</th>
                    <th>Email</th>
                    <th>age</th>
  
                    <th> Trainer Image</th>
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
                    <td><button><img src="delete.PNG" className="imgedit"/></button></td>
                </tr>
                

               </table>

            </div>
        </div>
    </div>
    </div>
   
  )
}

export default AdminDashViewTrainers