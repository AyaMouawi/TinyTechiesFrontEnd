import React from "react";

// css
import "../css/SingleCourseProject.css";
const ProjectForm = () => {
  return (
    <div className='project-form-content'>
     
      <div className='project-input'>
        <label htmlFor='userName'>User name</label>
        <input type='text' />
      </div>
      <div>
        <div className='project-form'>
          <label htmlFor='projectFile'>Project File</label>
          <input type='file' />
        </div>
        <div className='project-form'>
          <label htmlFor='projectFile'>submit image</label>
          <input type='file' accept='image' />
        </div>
      </div>
      <div className='project-input'>
        <label htmlFor='projectDesc'>Project Description</label>
        <textarea
          placeholder='Remember, be nice!'
          cols='30'
          rows='5'
        ></textarea>
      </div>
      <div className='btn-submit'>
        <button type='submit' className='project-form-btn-submit'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
