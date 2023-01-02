import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
  // exit={{ x:window.innerWidth, transition: { duration: 0.4 }  }}
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="container my-5 w-75 d-flex justify-content-center"
    > 
      <div className="conatiner d-flex flex-wrap justify-content-around ">
        {employes.map((item, index) => (
          <div className="my-2  " style={{ width: "40vh" }}>
            <div>
              <div className="box justify-content-start ">
                <div
                  className="card mb-5 mx-0 "
                  style={{
                    width: "100%",
                    boxShadow: "0 8px 8px 4px rgba(228, 224, 224, 0.981)",
                  }}
                >
                  <div
                    className="card-body"
                    style={{ backgroundColor: "rgba(228, 224, 224, 0.600)" }}
                  >
                    <h5
                      className="font-weight-bold mb-3"
                      style={{ textAlign: "center" }}
                    >
                      <b>
                        <i>ID - </i>
                      </b>
                      {item.id}
                    </h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item my-1 d-flex"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Name-</i>
                      </b>
                      <span style={{wordBreak:"break-all"}}>{item.name}</span>
                    </li>
                    <li
                      className="list-group-item my-1"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Email - </i>
                      </b>
                      <span style={{wordBreak:"break-all"}}>{item.email}</span>
                    </li>
                    <li
                      className="list-group-item my-1"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Phone - </i>
                      </b>
                      <span style={{wordBreak:"break-all"}}>{item.phone}</span>
                    </li>
                    <li
                      className="list-group-item my-1 d-flex"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>LinkedIn-</i>
                      </b>
                      <span className="" style={{wordBreak:"break-all"}}><a id='url' target='blank' href={item.linkedin}> &#x2197;LinkedIn Profile </a></span>
                    </li>
                    <li
                      className="list-group-item my-1 d-flex"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>GitHub - </i>
                      </b>
                      <span style={{wordBreak:"break-all"}}> <a id='url' target='blank' href={item.github}> &#x2197; Github Profile </a></span>
                    </li>
                    <li
                      className="list-group-item mt-1"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Resume - </i>
                      </b>
                      <a target="blank" id="url" href={item.resume}>
                      &#x2197; View Resume
                      </a>{" "}
                    </li>
                    <li
                      className="list-group-item my-0"
                      style={{ backgroundColor: "rgba(228, 224, 224, 0.600)" }}
                    >
                      {/* <Link to="/update" className="btn btn-info mx-3">Update</Link>                  */}
                      {/* <button className="btn btn-danger">Edit</button> */}
                      <NavLink
                        to={`/${item.id}/`}
                        className="btn btn-info px-5 py-2"
                        id='resume'
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          // color: "rgba(8, 120, 8, 0.853)",
                          fontSize: "1.2rem",
                          fontWeight: "640",
                        }}
                        
                      >
                        Edit Details
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
