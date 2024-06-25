import React, { useState } from 'react';
import "../styles/profile.css"

const Profile = ({ client, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');
  const [objectives, setObjectives] = useState('');
  const [observations, setObservations] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí puedes manejar la lógica para guardar los cambios, por ejemplo, enviar a un backend.
  };

  return (
    <section id="userProfile" className="container my-5 full-width">
      <h2 className="mb-4">Profile Section</h2>
      <div className='row'>
        <div className="profile-row col-12 col-md-4 col-lg-4">
          <label className="profile-label">Name</label>
          <span className="profile-value">{client.client_name}</span>
        </div>

        <div className="profile-row col-12 col-md-4 col-lg-4">
          <label className="profile-label">Surname</label>
          <span className="profile-value">{client.client_surname}</span>
        </div>

        <div className="profile-row col-12 col-md-4 col-lg-4">
          <label className="profile-label">Email</label>
          <span className="profile-value">{client.client_email}</span>
        </div>
      </div>
      {isEditing ? (
        <>
          <div className="profile-row">
            <label className="profile-label">General Description</label>
            <textarea 
              className="form-control mb-3 profile-textarea" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="profile-row">
            <label className="profile-label">Objectives</label>
            <textarea 
              className="form-control mb-3 profile-textarea" 
              value={objectives} 
              onChange={(e) => setObjectives(e.target.value)}
            />
          </div>

          <div className="profile-row">
            <label className="profile-label">Observations</label>
            <textarea 
              className="form-control mb-3 profile-textarea" 
              value={observations} 
              onChange={(e) => setObservations(e.target.value)}
            />
          </div>

          <button onClick={handleSave} className="btn btn-success">Save</button>
        </>
      ) : (
        <>
          <div className="profile-row">
            <label className="profile-label">General Description</label>
            <p className="profile-value">{description || "No description available"}</p>
          </div>

          <div className="profile-row">
            <label className="profile-label">Objectives</label>
            <p className="profile-value">{objectives || "No objectives available"}</p>
          </div>

          <div className="profile-row">
            <label className="profile-label">Observations</label>
            <p className="profile-value">{observations || "No observations available"}</p>
          </div>

          <button onClick={handleEdit} className="btn btn-warning profile-save">Edit</button>
        </>
      )}
      
      <button onClick={onBack} className="btn btn-primary ms-3">Back to Clients</button>
    </section>
  );
};

export default Profile;
