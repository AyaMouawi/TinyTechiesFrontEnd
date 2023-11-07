import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'reactstrap';

const AdminDashCourses = ({ courses, onDeleteCourse, onEditCourse }) => {
  const [editingCourse, setEditingCourse] = useState(null);
  const [trainerList, setTrainerList] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [oldFile, setOldFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // declare the variable current 
  const [currentIndex, setCurrentIndex] = useState(0);
  // set the pages to show only 5 rows
  const dataPerPage = 5;

  const handleEditClick = (course) => {
    setEditingCourse({
      ...course,
      CourseStartTime: course.CourseStartTime.split('T')[0],
      CourseEndTime: course.CourseEndTime.split('T')[0],
    });
    setSelectedTrainer(course.TrainerName);


    setOldFile(course.CourseFile);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingCourse({
      ...editingCourse,
      [name]: value,
    });
  };

  const handleEditFileChange = (e) => {
    const { name, files } = e.target;
    console.log({name, files});

    if (files.length > 0) {
      setEditingCourse({
        ...editingCourse,
        [name]: files[0],
      });
    } else {
      console.log(oldFile);
      setEditingCourse({
        ...editingCourse,
        [name]: oldFile,
      });
    }
  };

  const handleEditSubmit = () => {
    setIsSaving(true);
    console.log('Submitting edit:', editingCourse);

    const formData = new FormData();
    formData.append('Course_id', editingCourse.Course_id);
    formData.append('CourseName', editingCourse.CourseName);

    const selectedTrainerObject = trainerList.find(
      (trainer) => trainer.UserFullName === selectedTrainer
    );

    if (selectedTrainerObject) {
      console.log('Selected Trainer:', selectedTrainerObject);
      formData.append('Trainer_id', selectedTrainerObject.User_id);
    } else {
      console.error('Selected trainer not found in the list.');
      return;
    }

    formData.append('CourseDescription', editingCourse.CourseDescription);
    formData.append('CourseStartTime', editingCourse.CourseStartTime);
    formData.append('CourseEndTime', editingCourse.CourseEndTime);
    formData.append('image', editingCourse.image?editingCourse.image:editingCourse.CourseImage); 
    formData.append('file', editingCourse.file?editingCourse.file:editingCourse.CourseFile);

    fetch(`${process.env.REACT_APP_API_URL}/courses/update/${editingCourse.Course_id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Edit Response Data:', data);
        if (data.success) {
          toast.success(`${editingCourse.CourseName} updated successfully`, {
            autoClose: 2000,
          });
          setEditingCourse(null);
          onEditCourse();
        } else {
          toast.error(`Error updating ${editingCourse.CourseName}`);
          setEditingCourse(null);
        }
        setIsSaving(false);
      })
      .catch((error) => {
        console.error('Error updating course:', error);
        toast.error(`Error updating ${editingCourse.CourseName}`);
        setEditingCourse(null);
        setIsSaving(false);
      });
  };

  const handleDeleteCourse = (courseId) => {
    
    const shouldDelete = window.confirm('Are you sure you want to delete this course?');
    if (shouldDelete) {
      fetch(`${process.env.REACT_APP_API_URL}/courses/delete/${courseId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success('Course Deleted Successfully', { autoClose: 2000 });
               onDeleteCourse(courseId); 
          } else {
            toast.error('Error deleting course');
          }
        })
        .catch((error) => {
          console.error('Error deleting course:', error);
          toast.error('Error deleting course');
        });
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/trainers/getAllTrainers`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTrainerList(data.data);
        } else {
          toast.error('Error fetching trainers');
        }
      })
      .catch((error) => {
        console.error('Error fetching trainers:', error);
        toast.error('Error fetching trainers');
      });
  }, []);

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
                <th>Course Name</th>
                <th>Trainer Name</th>
                <th>Course Description</th>
                <th>Students Count</th>
                <th>Course file</th>
                <th>Course Image</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {/* you should make slice to the array */}
              {courses.slice(currentIndex, currentIndex + dataPerPage).map((course) => (
                <tr key={course.Course_id}>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <input
                        type="text"
                        name="CourseName"
                        value={editingCourse.CourseName}
                        onChange={handleEditInputChange}
                      />
                    ) : (
                      course.CourseName
                    )}
                  </td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <select
                        name="TrainerName"
                        value={selectedTrainer}
                        onChange={(e) => setSelectedTrainer(e.target.value)}
                      >
                        {trainerList.map((trainer) => (
                          <option key={trainer.User_id} value={trainer.UserFullName}>
                            {trainer.UserFullName}
                          </option>
                        ))}
                      </select>
                    ) : (
                      course.TrainerName
                    )}
                  </td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <input
                        type="text"
                        name="CourseDescription"
                        value={editingCourse.CourseDescription}
                        onChange={handleEditInputChange}
                      />
                    ) : (
                      course.CourseDescription
                    )}
                  </td>
                  <td>{course.StudentCount}</td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <input
                        type="file"
                        name="file"
                        onChange={handleEditFileChange}
                      />
                    ) : (
                      <a href={course.CourseFile} target="_blank" rel="noopener noreferrer">
                        Click here
                      </a>
                    )}
                  </td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <input
                        type="file"
                        name="image"
                        onChange={handleEditFileChange}
                      />
                    ) : (
                      <img src={course.CourseImage} alt="Course" width="50" height="50" />
                    )}
                  </td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <input
                        type="date"
                        name="CourseStartTime"
                        value={editingCourse.CourseStartTime}
                        onChange={handleEditInputChange}
                      />
                    ) : (
                      course.CourseStartTime.split('T')[0]
                    )}
                  </td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <input
                        type="date"
                        name="CourseEndTime"
                        value={editingCourse.CourseEndTime}
                        onChange={handleEditInputChange}
                      />
                    ) : (
                      course.CourseEndTime.split('T')[0]
                    )}
                  </td>
                  <td>
                    {editingCourse && editingCourse.Course_id === course.Course_id ? (
                      <button onClick={handleEditSubmit} disabled={isSaving}>
                      {isSaving ? <Spinner size="sm" color="primary" /> : 'Save'}
                    </button>
                    ) : (
                      <button onClick={() => handleEditClick(course)}>Edit</button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteCourse(course.Course_id)}>
                      <img src="Images/trash-solid.svg" className="imgedit" alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            {/* add the buttons next and previous */}
            <div className="pagination">
              <button disabled={currentIndex === 0} onClick={handlePrevious} className="btn-next">
                Previous
              </button>
              <button
                disabled={currentIndex + dataPerPage >= courses.length}
                onClick={handleNext}
                className="btn-next"
              >
                Next
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashCourses;