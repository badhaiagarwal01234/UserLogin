import React from 'react'
import  { useState, useEffect } from "react";
import Swal from 'sweetalert2';



function CreateUser() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      dob: "",
      address: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
    const data =   setFormData({ ...formData, [name]: value });
    };
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:7000/abc/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Failed to register user");
        }
        const result = await response.json();
        console.log("User registered successfully:", result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Create Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        setFormData({
          name: "",
          email: "",
          password: "",
          dob: "",
          address: "",
        }); // Reset the form
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  return (
    
    <>
      <div className="container mt-5">
       <h3 >User Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mt-3">
               <div className="col-6">
                  <label htmlFor="name" className='form-label'>Name</label>
                  <input type="text" name="name" id="" className='form-control' value={formData.name} onChange={handleChange} required/>
               </div>
               <div className="col-6">
                  <label htmlFor="email" className='form-label'>Email</label>
                  <input type="email" name="email" id="" className='form-control' value={formData.email} onChange={handleChange} required/>
               </div>
               <div className="col-6">
                  <label htmlFor="password" className='form-label'>Password</label>
                  <input type="password" name="password" id="" className='form-control'value={formData.password} onChange={handleChange} required/>
               </div>
               <div className="col-6">
                  <label htmlFor="dob" className='form-label'>D.O.B</label>
                  <input type="date" name="dob" id="" className='form-control' value={formData.dob} onChange={handleChange} required/>
               </div>
               <div className="col-12">
                  <label htmlFor="address" className='form-label'>Address</label>
                  <input type="text" name="address" id="" className='form-control' value={formData.address} onChange={handleChange}  required/>
               </div> 
            </div>
            <button className='btn btn-success mt-3'>Submit</button>
          </form>
       
      </div>
    </>
  )
}

export default CreateUser