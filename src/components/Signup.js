import React from 'react';
import './Signup.css';

function Signup({ formData, setFormData }) {
  return (
    <div className="form-content">
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
        placeholder="Email..."
        autoComplete="required"
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value.trim() })}
        placeholder="Password"
        autoComplete="required"
      />
      <input
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value.trim() })}
        placeholder="Confirm Password"
        autoComplete="required"
      />
    </div>
  );
}

export default Signup;
