import React, { useState } from 'react';
import Signup from './Signup';
import UserPersonalDetails from './UserPersonalDetails';
import Other from './Other';
import Confirm from './Confirm';
import './FormUser.css';

function FormUser() {
  const [pages, setPages] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    age: '',
    city: '',
    occupation: '',
    bio: '',
    petName: '',
  });

  const FormTitle = ['Signup', 'Enter Your Personal Details', 'Other', 'Confirm'];

  const PageDisplay = () => {
    if (pages === 0) {
      return <Signup formData={formData} setFormData={setFormData} />;
    } else if (pages === 1) {
      return <UserPersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (pages === 2) {
      return <Other formData={formData} setFormData={setFormData} />;
    } else {
      return <Confirm formData={formData} />;
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>{FormTitle[pages]}</h1>
        <div className="form-content">{PageDisplay()}</div>
        <div className="progress-bar">
          <div className={`step ${pages === 0 ? 'active' : ''}`}>1</div>
          <div className={`step ${pages === 1 ? 'active' : ''}`}>2</div>
          <div className={`step ${pages === 2 ? 'active' : ''}`}>3</div>
          <div className={`step ${pages === 3 ? 'active' : ''}`}>4</div>
        </div>
        <div className="form-buttons">
          <button disabled={pages === 0} onClick={() => setPages((decrement) => decrement - 1)}>
            Prev
          </button>
          <button
          onClick={() => {
            if(pages === FormTitle.length - 1){
              alert('Form Submited successfully')
              console.log(formData)
              
            }else{
              setPages((nextPage)=> nextPage + 1)
            }
          }}>
          {pages === FormTitle.length - 1 ? 'Submit' : 'Next'}  
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormUser;
