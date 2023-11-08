import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'reactstrap';

const AdminDashAddcourse = ({ updateCourses }) => {
  const [trainers, setTrainers] = useState([]);
  const [courseData, setCourseData] = useState({
    Trainer_id: '',
    CourseName: '',
    CourseDescription: '',
    CourseStartTime: '',
    CourseEndTime: '',
    image: null,
    file: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/trainers/getAllTrainers`);
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setTrainers(data.data);
          } else {
            toast.error('Failed to fetch trainers');
          }
        } else {
          toast.error('Failed to fetch trainers');
        }
      } catch (error) {
        console.error('Error fetching trainers:', error);
        toast.error('Failed to fetch trainers');
      }
    };

    fetchTrainers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
    
  };

  const handleImageUpload = (e) => {
    setCourseData({ ...courseData, image: e.target.files[0] });
  };

  const handleFileUpload = (e) => {
    setCourseData({ ...courseData, file: e.target.files[0] });
  };

  const addCourse = async () => {
    setIsLoading(true); 
    const formData = new FormData();
    formData.append('Trainer_id', courseData.Trainer_id);
    formData.append('CourseName', courseData.CourseName);
    formData.append('CourseDescription', courseData.CourseDescription);
    formData.append('CourseStartTime', courseData.CourseStartTime);
    formData.append('CourseEndTime', courseData.CourseEndTime);
    formData.append('image', courseData.image);
    formData.append('file', courseData.file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/add`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Course Added Successfully');
  
        setCourseData({
          Trainer_id: '',
          CourseName: '',
          CourseDescription: '',
          CourseStartTime: '',
          CourseEndTime: '',
          image: null,
          file: null,
        });


        document.getElementById('image-upload').value = '';
        document.getElementById('file-upload').value = '';
        updateCourses();

      } else {
        toast.error('Failed to add course');
      }
    
    } catch (error) {
      console.error('Error adding course:', error);
      toast.error('Failed to add course');
    }
    finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
      <div className="cardiv">
        <div className="bgcard">
          <div className="inputsdiv">
            <form className="add">
              <input
                type="text"
                name="CourseName"
                value={courseData.CourseName}
                onChange={handleInputChange}
                className="inputfield"
                placeholder="Add course name"
              />
              <div className='assignment-input'>
                <select
                  value={courseData.Trainer_id}
                  onChange={handleInputChange}
                  name="Trainer_id"
                  className='assignment-select AdminSelect'
                >
                  <option value=''>Trainers</option>
                  {trainers.map(trainer => (
                    <option key={trainer.User_id} value={trainer.User_id}>
                      {trainer.UserFullName}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                name="CourseDescription"
                value={courseData.CourseDescription}
                onChange={handleInputChange}
                className="inputfield"
                placeholder="Add course description"
              />
              <input
                type="date"
                name="CourseStartTime"
                value={courseData.CourseStartTime}
                onChange={handleInputChange}
                className="inputfield"
              />
              <input
                type="date"
                name="CourseEndTime"
                value={courseData.CourseEndTime}
                onChange={handleInputChange}
                className="inputfield"
              />
              <div className="AdminFileInputs">
                <div className="Adminfile-upload">
                  <label>Choose Image</label>
                  <input
                    type="file"
                    id="image-upload"
                    className="inputfield AdminFile"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="Adminfile-upload">
                  <label>Choose File</label>
                  <input
                    type="file"
                    id="file-upload"
                    className="inputfield AdminFile"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
              <button
                className="addcoursebutton"
                onClick={addCourse}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner color="primary" className="spinner" />
                ) : (
                  'Add Course'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashAddcourse;
