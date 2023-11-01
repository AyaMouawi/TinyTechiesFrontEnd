import React, { useState, useRef } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AdminDashAddTrainer = () => {
  const [UserFullName, setUserFullName] = useState('');
  const [Password, setPassword] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserAge, setUserAge] = useState('');
  const [image, setImage] = useState(null);

  const imageInputRef = useRef(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'UserFullName') setUserFullName(value);
    else if (name === 'Password') setPassword(value);
    else if (name === 'UserEmail') setUserEmail(value);
    else if (name === 'UserAge') setUserAge(value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!UserFullName || !Password || !UserEmail || !UserAge || !image) {
      toast.error('Please fill in all the fields');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('UserFullName', UserFullName);
      formData.append('Password', Password);
      formData.append('UserEmail', UserEmail);
      formData.append('UserAge', UserAge);
      formData.append('image', image);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/trainers/add`, formData);

      if (response.status === 201) {
        setUserFullName('');
        setPassword('');
        setUserEmail('');
        setUserAge('');
        setImage(null);
        imageInputRef.current.value = ''; 
        toast.success('Trainer Added Successfully');
      }
    } catch (error) {
      console.error('Error adding trainer:', error);
      toast.error('Unable to add trainer');
    }
  };

  return (
    <div>
      <div className="cardiv">
        <div className="bgcard">
          <div className="inputsdiv">
            <form className="edit" onSubmit={handleSubmit}>
              <input
                type="text"
                className="inputfield"
                name="UserFullName"
                placeholder="Add Trainer name"
                value={UserFullName}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                className="inputfield"
                name="UserEmail"
                placeholder="Add trainer email"
                value={UserEmail}
                onChange={handleChange}
              /><br />
              <input
                type="number"
                className="inputfield"
                name="UserAge"
                placeholder="Add trainer age"
                value={UserAge}
                onChange={handleChange}
              /><br />
              <input
                type="text"
                className="inputfield"
                name="Password"
                placeholder="Add Password"
                value={Password}
                onChange={handleChange}
              /><br />

              <label className="date">Choose Image</label>
              <input
                type="file"
                className='inputfield'
                accept='image/*'
                onChange={handleImageChange}
                ref={imageInputRef} 
              />
              <input type="submit" className="addcoursebutton" value="Add Trainer" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AdminDashAddTrainer;
