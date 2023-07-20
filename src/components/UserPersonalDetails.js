import React from 'react';
import './UserPersonalDetails.css';

function UserPersonalDetails({ formData, setFormData }) {
  return (
    <div className="form-content">
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value.trim() })}
        placeholder="First Name"
        autoComplete="required"
      />
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value.trim() })}
        placeholder="Last Name"
        autoComplete="required"
      />
      <input
        type="text"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value.trim() })}
        placeholder="Age"
        autoComplete="required"
      />
      <input
        type="text"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value.trim() })}
        placeholder="City"
        autoComplete="required"
      />
      <input
        type="text"
        value={formData.occupation}
        onChange={(e) => setFormData({ ...formData, occupation: e.target.value.trim() })}
        placeholder="Occupation"
        autoComplete="required"
      />
    </div>
  );
}

export default UserPersonalDetails;
