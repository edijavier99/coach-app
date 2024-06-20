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
    <section id="userProfile" className="container mt-5 full-width">
      <h2 className="mb-4">Profile Section</h2>
      <p>This is the profile of <strong>{client.client_name} {client.client_surname}</strong></p>
      <p>The email is <strong>{client.client_email}</strong></p>
      
      {isEditing ? (
        <>
          <h6>General Description</h6>
          <textarea 
            className="form-control mb-3" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
          />
          <h6>Objectives</h6>
          <textarea 
            className="form-control mb-3" 
            value={objectives} 
            onChange={(e) => setObjectives(e.target.value)}
          />
          <h6>Observations</h6>
          <textarea 
            className="form-control mb-3" 
            value={observations} 
            onChange={(e) => setObservations(e.target.value)}
          />
          <button onClick={handleSave} className="btn btn-success">Save</button>
        </>
      ) : (
        <>
          <h6>General Description</h6>
          <p>{description || "No description available"}</p>
          <h6>Objectives</h6>
          <p>{objectives || "No objectives available"}</p>
          <h6>Observations</h6>
          <p>{observations || "No observations available"}</p>
          <button onClick={handleEdit} className="btn btn-warning">Edit</button>
        </>
      )}
      
      <button onClick={onBack} className="btn btn-primary mt-3">Back to Clients</button>
    </section>
  );
};

export default Profile;
