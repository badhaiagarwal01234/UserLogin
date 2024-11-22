import React from 'react'
import  { useState, useEffect } from "react";
import axios from 'axios'
import Swal from 'sweetalert2';


function GetAllUser() {

    const [userData, setUserData] = useState([]); // To store fetched data
    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:7000/abc/getAll`);
            if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
            const json = await response.json();
            console.log(json);
            setUserData(json); // Store fetched data in state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        fetchUserData();
    }, []);


  const deleteuser = async (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:7000/abc/deleteOne/${id}`, {
                    method: 'DELETE',
                  });
                if (!response.ok) {
                  throw new Error("Failed to register user");
                }
                const result = await response.json();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  window.location.reload();
                console.log("User Delete successfully:", result);
              } catch (error) {
                console.error("Error submitting form:", error);
              }
         
        }
      });
     
  }
  return (
    <>
        <div className="container mt-3">
        <h3>All Users</h3>
            <div className="row mt-4">
            {userData.map((user, index) => (
                <div className="col-3" key={index}>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Name : <span>{user.name}</span></h5>
                            <p className="card-title">Email : <span>{user.email}</span></p>
                            <p className="card-title">D.O.B : <span>{user.dob}</span></p>
                            <p className="card-text">Address : <span>{user.address}</span></p>
                            <div className="btns">
                                <button className="btn btn-primary"  type='button' onClick={(e)=>deleteuser(user._id)}>Delete</button>
                                <button className="btn btn-success">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            </div>
        </div>
    </>
  )
}

export default GetAllUser