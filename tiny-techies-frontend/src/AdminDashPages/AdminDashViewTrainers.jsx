import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../AdminDashCSS/AdminDash.css";

const AdminDashViewTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  // declare the variable current 
  const [currentIndex, setCurrentIndex] = useState(0);
  // set the pages to show only 5 rows
  const dataPerPage = 5;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/trainers/getAllTrainers`)
      .then((response) => {
        setTrainers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (trainerId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trainer?"
    );
    if (!confirmDelete) {
      return;
    }

    if (confirmDelete) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/trainers/delete/${trainerId}`)
        .then((response) => {
          if (response.status === 200) {
            setTrainers((prevTrainers) =>
              prevTrainers.filter((trainer) => trainer.User_id !== trainerId)
            );
            toast.success("Trainer Deleted Successfully");
          } else {
            console.error("Failed to delete trainer.");
            toast.error("Failed to delete trainer");
          }
        })
        .catch((error) => {
          console.error("Error deleting trainer:", error);
          toast.error("Error deleting trainer");
        });
    }
  };
  // create next previous buttons
  const handleNext = () => {
    setCurrentIndex(currentIndex + dataPerPage);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - dataPerPage);
  };
  return (
    <div>
      <div className="cardiv">
        <div className="bgcardcourses">
          <div className="inputsdivcourses">
            <table border="1" className="tbcourse">
              <tr>
                <th>Trainer Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Password</th>
                <th>Trainer Image</th>
                <th>Delete</th>
              </tr>
              {/* you should make slice to the array */}
              {trainers
                .slice(currentIndex, currentIndex + dataPerPage)
                .map((trainer) => (
                  <tr key={trainer.User_id}>
                    <td>{trainer.UserFullName}</td>
                    <td>{trainer.UserEmail}</td>
                    <td>{trainer.UserAge}</td>
                    <td>{trainer.Password}</td>
                    <td>
                      <img
                        src={trainer.TrainerImage}
                        alt={trainer.UserFullName}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>
                      <button onClick={() => handleDelete(trainer.User_id)}>
                        <img
                          src="Images/trash-solid.svg"
                          className="imgedit"
                          alt="Delete"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
            </table>
            {/* dont forget to add the buttons */}
            <div className="pagination">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrevious}
                className="btn-next"
              >
                Previous
              </button>
              <button
                disabled={currentIndex + dataPerPage >= trainers.length}
                onClick={handleNext}
                className="btn-next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashViewTrainers;
