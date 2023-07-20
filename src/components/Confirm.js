import React from 'react';
import './Confirm.css';

const Confirm = ({ formData }) => {
  return (
    <div className="confirm-container">
      <h2>Confirm User Details</h2>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Password:</strong> {formData.password}
      </div>
      <div>
        <strong>Confirm Password:</strong> {formData.confirmPassword}
      </div>
      <div>
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div>
        <strong>Age:</strong> {formData.age}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
      <div>
        <strong>Occupation:</strong> {formData.occupation}
      </div>
      <div>
        <strong>Bio:</strong> {formData.bio}
      </div>
      <div>
        <strong>Pet Name:</strong> {formData.petName}
      </div>
    </div>
  );
};

export default Confirm;
