import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Detail() {
  const [employe, setEmploye] = useState<any>([]);

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

  const deleteEmp = async (id: Number) => {
    await axios.delete(`http://localhost:8000/api/${id}`);
    navigate("/employee");
    // eslint-disable-next-line no-restricted-globals
    // confirm(`Confirm Deleting ID no. ${id}`)
    alert( `ID no.${id} deleted`)
  };

  return (
    <div>
      <h3>Details</h3>

      <div className="single-product-info ">
        {/* <p>{employe.name}</p> */}
        <div className="container d-flex justify-content-center">
          <div className="box  mx-2  ">
            <div className="card" style={{ width: "28rem" , boxShadow:"0 8px 8px 4px rgba(228, 224, 224, 0.981)"}}>
              <div className="card-body" style={{backgroundColor:"rgba(228, 224, 224, 0.600)"}}>
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
                <li className="list-group-item mt-3 " style={{ textAlign: "start" }}>
                  <b>
                    <i>Name - </i>
                  </b>
                  {employe.name}
                </li>
                <li className="list-group-item mt-3" style={{ textAlign: "start" }}>
                  <b>
                    <i>Email - </i>
                  </b>
                  {employe.email}
                </li>
                <li className="list-group-item mt-3" style={{ textAlign: "start" }}>
                  <b>
                    <i>Phone - </i>
                  </b>
                  {employe.phone}
                </li>
                <li className="list-group-item mt-3" style={{ textAlign: "start" }}>
                  <b>
                    <i>LinkedIn - </i>
                  </b>
                  {employe.linkedin}
                </li>
                <li className="list-group-item mt-3" style={{ textAlign: "start" }}>
                  <b>
                    <i>GitHub - </i>
                  </b>
                  {employe.github}
                </li>
                <li className="list-group-item mt-2" style={{ textAlign: "start" }}>
                  <b>
                    <i>Resume - </i>
                  </b>
                  <a target="blank" id="resume" href={employe.resume}>
                    Click to view File
                  </a>{" "}
                </li>
                <li className="list-group-item pt-3" style={{backgroundColor:"rgba(228, 224, 224, 0.600)"}}>
                  <NavLink
                    to={`/${employe.id}/update`}
                    className="btn btn-success mx-3"
                    style={{backgroundColor:"rgba(50, 120, 8, 0.953)"}}
                  >
                    Update
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    style={{backgroundColor:"rgba(213, 10, 10, 0.725)"}}
                    onClick={() => deleteEmp(employe.id)}
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
  );
}
