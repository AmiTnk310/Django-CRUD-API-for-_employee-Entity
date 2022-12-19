import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();
  // const id = useParams()

  const addEmployeDetails = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("email", email);
    formField.append("phone", phone);
    formField.append("linkedin", linkedin);
    formField.append("github", github);
    if (resume !== null) {
      formField.append("resume", resume);
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/",
        data: formField,
      });
      if (response) {
        // console.log("response ", response)
        const x = JSON.stringify(name)
        alert(`Employee Name - ${x}  , added`)
        navigate("/employee");
      }
    } catch (err) {
      alert(err);
    }
    // await axios({
    //     method:'post',
    //     url: "http://localhost:8000/api/",
    //     data: formField

    // }).then((response)=>{
    //     console.log(response.data)
    //     navigate("/")
    // })
    // .catch((error)=>{
    //     alert(error);
    // })
  };

  return (
    <div className="container my-5">
      

      <form>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Name</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="EmployeeName"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Email</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="EmployeeEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Phone</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              placeholder="Phone Number"
              name="EmployeePhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>LinkedIn</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              placeholder="LinkedIn URL"
              name="EmployeeLinkedIn"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Github</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              placeholder="GitHub URL"
              name="EmployeeGithub"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Resume</b>
          </label>
          <div className="col-sm-10">
            <input
              type="file"
              className="form-control"
              name="resume"
              onChange={(e: any) => setResume(e.target.files[0])}
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <div className="col-sm-10">
            <button
              type="button"
              className="btn btn-success"
              onClick={addEmployeDetails}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
