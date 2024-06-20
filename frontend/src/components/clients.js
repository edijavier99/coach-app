import React, { useEffect, useState } from 'react';
import { useGetFetch } from '../hooks/get';
import "../styles/clients.css"

const Clients = () => {
  const [allClients, setAllClients] = useState([])
  const { data: clients, loading, error } = useGetFetch(`${process.env.REACT_APP_BACKEND_URL}api/clients`);
  
  useEffect(() => {
    if (!loading && !error) {
        // This ensures that articles are set only once the data is successfully fetched
        setAllClients(clients);
    }
  }, [clients, loading, error]);

  const showClients = () => {
    if (!allClients.length) {
      return <p>No clients available</p>;
    }
    
    return allClients.map((item, index) => {
      return (
        <article key={index} id='client-card'>
          <div className='row'>
              <div className='col-8'>
                  <p><strong>Personal information</strong></p>
                  <p>{item.client_name} {item.client_surname}</p>
                  <p>{item.client_email}</p>
              </div>
              <div className='col-4 d-flex justify-content-end align-items-start'>
                  <i className="fa-solid fa-gear dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Profile</a></li>
                      <li><a className="dropdown-item" href="#">Anotations</a></li>
                      <li><a className="ms-3 btn btn-danger" href="#">Delete</a></li>
                  </ul>
              </div>
          </div>
      </article>

      );
    });
  };
  
  if (loading) return <p>Loading clients...</p>;
  if (error) return <p>Error loading clients: {error.message}</p>;
  
  return (
      <section id='admin-article' className='container-fluid'>
      <header className='aa-header row col-11 mx-auto my-3 p-4'>
          <h1>Clients Section</h1>
          <p>In this section you can see all the clients that you had and also see their personal file</p>
          <form className="d-flex mt-5 mx-auto" >
            <input
              className="form-control me-2 mb-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
     </header>
      <main className='row col-md-11 mx-auto clients-grid'>
          {showClients()}
      </main>
    </section>
  );
};

export default Clients;
