import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function TestDetail() {
  const [employe, setEmploye] = useState<any>([]);

  const [show , setShow] = useState(false)

  
  // console.log("employeae",employe);  = Empty array

  const { id } = useParams();

  useEffect(() => {
    getSingleEmp();
  }, []);

  const navigate = useNavigate();

  const getSingleEmp = async () => {
    // const{ data }=await axios.get(`http://localhost:8000/api/${id}`)
    // console.log(data)
    // setEmploye(data)
    await axios({
      method: "get",
      url: `http://localhost:8000/api/${id}`,
    })
      .then((response) => {
        // console.log("data", response.data);
        setEmploye(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteEmp = () => {
    // ----------------------------------------
    // eslint-disable-next-line no-restricted-globals
    // const cnf = confirm(`Confirm Deleting ID no. ${id}`)

    // eslint-disable-next-line no-restricted-globals
    // if(cnf===true){
    //   await axios.delete(`http://localhost:8000/api/${id}`);
    //   alert(`ID no.${id} deleted`);
    //   navigate("/employee");
    // } else {
    //   alert("Deletion cancelled");
    //   // navigate(`/${id}/`);
    // }

    // ---------------------------------------------
    setShow(true)
    
  };

  const handleOkay=async()=>{
    await axios.delete(`http://localhost:8000/api/${id}`);
    setShow(true)
    navigate("/employee")
  }

  const handleCancel=()=>{
    setShow(false)
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="my-5">

     
      <h3>Details</h3>

      <div className="single-product-info ">
        {/* <p>{employe.name}</p> */}
        <div className="container d-flex justify-content-center">
          <div className="box " style={{width:"auto"}}>
            <div
              className="card"
              style={{
                width: "21rem",
                boxShadow: "0 8px 8px 4px rgba(228, 224, 224, 0.981)",
              }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "rgba(228, 224, 224, 0.600)" }}
              >
                <h5
                  className="font-weight-bold my-2"
                  style={{ textAlign: "center" }}
                >
                  <b>
                    <i>ID - </i>
                  </b>
                  {employe.id}
                </h5>
              </div>
              <ul className="list-group list-group-flush ">
              <li
                      className="list-group-item my-1 d-flex"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Name-</i>
                      </b>
                      <span style={{wordBreak:"break-all"}}>{employe.name}</span>
                    </li>
                    <li
                      className="list-group-item my-1"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Email - </i>
                      </b>
                      <span style={{wordBreak:"break-all"}}>{employe.email}</span>
                    </li>
                    <li
                      className="list-group-item my-1"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Phone - </i>
                      </b>
                      <span style={{wordBreak:"break-all"}}>{employe.phone}</span>
                    </li>
                    <li
                      className="list-group-item my-1 d-flex"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>LinkedIn-</i>
                      </b>
                      <span className="" style={{wordBreak:"break-all"}}><a id='url' href={employe.linkedin}> &#x2197;LinkedIn Profile </a></span>
                    </li>
                    <li
                      className="list-group-item my-1 d-flex"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>GitHub - </i>
                      </b>
                      <span style={{wordBreak:"break-all"}}> <a id='url' href={employe.github}> &#x2197; Github Profile </a></span>
                    </li>
                    <li
                      className="list-group-item mt-1"
                      style={{ textAlign: "start" }}
                    >
                      <b className="px-3">
                        <i>Resume - </i>
                      </b>
                      <a target="blank" id="url" href={employe.resume}>
                      &#x2197; View Resume
                      </a>{" "}
                    </li>
                <li
                  className="list-group-item pt-3"
                  style={{ backgroundColor: "rgba(228, 224, 224, 0.600)" }}
                >
                  <NavLink
                    to={`/${employe.id}/update`}
                    className="btn btn-success mx-3"
                    style={{ backgroundColor: "rgba(50, 120, 8, 0.953)" }}
                  >
                    Update
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    style={{ backgroundColor: "rgba(213, 10, 10, 0.725)" }}
                    onClick={deleteEmp}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click <span style={{color:"red", fontWeight:"500"}}>Delete</span> to delete Employee ID no. - {id}</Modal.Body>
        <Modal.Footer>
          
          {/* <Button variant="primary" onClick={handleOkay()}>
            okay
          </Button> */}
          <Button variant="primary" onClick={handleOkay} style={{ border:"none",backgroundColor: "rgba(213, 10, 10, 0.725)" }}>Delete</Button>
          <Button variant="primary" onClick={handleCancel}>
            cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
}
