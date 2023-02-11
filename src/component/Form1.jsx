import React, { useState } from "react";
import "./form1.css";

function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address:""
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address:""
    });
  };

  return (
    <div className="Form1">
      <h1><center>Fitness Club Registration</center></h1><br/><br/>
      <div className="val">

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br/>
        <br/>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br/>
        
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <br/>
        
        
        <label htmlFor="Address">Address:</label>
        <input
          type="text"
          name="Address"
          id="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <br/>
        
        <center><button type="submit">Add Member</button></center>
      </form>
      {/* <a href="/Display"><button>View Member List</button></a> */}
      </div>
      <h2><center>Members List</center></h2>
      <div className="table">
      {submittedData.length > 0 && (
        <table className="abc">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
     </div> 
    </div>
  );
}

export default Form1;
