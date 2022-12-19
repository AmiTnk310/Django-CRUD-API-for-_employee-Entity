import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'


export default function ShowEmoloyee() {
  const [employes, setEmployes] = useState<any[]>([]);

  const getEmployee = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    // console.log("ssss",response.data)
    setEmployes(response.data);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div className="container my-5 w-75 d-flex justify-content-center">
        
     
      <div className="conatiner d-flex flex-wrap justify-content-around " >
        
      {employes.map((item, index) => (
        <div className="my-2  " style={{ width: "auto" }}>
        <div>
          <div className="box justify-content-start ">
            <div className="card mb-5 mx-2 " style={{ width: "22rem" ,boxShadow:"0 8px 8px 4px rgba(228, 224, 224, 0.981)"}}>
              <div className="card-body" style={{backgroundColor:"rgba(228, 224, 224, 0.600)"}}>
                <h5 className="font-weight-bold mb-3" style={{textAlign:"center" , }}><b><i>ID - </i></b>{item.id}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item my-1 " style={{textAlign:"start",}}><b className="px-3"><i>Name - </i></b>{item.name}</li>
                <li className="list-group-item my-1" style={{textAlign:"start",}}><b className="px-3"><i>Email - </i></b>{item.email}</li>
                <li className="list-group-item my-1" style={{textAlign:"start",}}><b className="px-3"><i>Phone - </i></b>{item.phone}</li>
                <li className="list-group-item my-1" style={{textAlign:"start",}}><b className="px-3"><i>LinkedIn - </i></b><span className="">{item.linkedin}</span></li>
                <li className="list-group-item my-1" style={{textAlign:"start",}}><b className="px-3"><i>GitHub - </i></b>{item.github}</li>
                <li className="list-group-item mt-1" style={{textAlign:"start",}}><b className="px-3"><i>Resume - </i></b><a target='blank' id='resume' href={item.resume}>View Resume</a> </li>
                <li className="list-group-item my-0" style={{backgroundColor:"rgba(228, 224, 224, 0.600)"}} >
                  
                  {/* <Link to="/update" className="btn btn-info mx-3">Update</Link>                  */}
                  {/* <button className="btn btn-danger">Edit</button> */}
                  <NavLink to={`/${item.id}/`} className="btn btn-info px-5 py-2" style={{backgroundColor:"transparent" ,border:"none" , color:"rgba(8, 120, 8, 0.853)" ,fontSize:"1.2rem", fontWeight:"640"}}>Edit Details</NavLink>   
                </li>
              </ul>
            </div>
            </div>
        </div>
        </div>
      ))}
      
       </div>
     
    </div>
  );
}
