import React from 'react';
import './Other.css';

function Other({ formData, setFormData }) {
  return (
    <div className="form-content">
      <input
        type="text"
        value={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value.trim() })}
        placeholder="Bio"
        autoComplete="required"
      />
      <input
        type="text"
        value={formData.petName}
        onChange={(e) => setFormData({ ...formData, petName: e.target.value.trim() })}
        placeholder="Pet Name"
        autoComplete="required"
      />
    </div>
  );
}

export default Other;
