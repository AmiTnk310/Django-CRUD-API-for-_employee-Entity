import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const loadEmploye = async () => {
    const response = await axios.get(`http://localhost:8000/api/${id}/`);
    // console.log("res", response.data);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setLinkedin(response.data.linkedin);
    setGithub(response.data.github);
    setResume(response.data.resume);
  };

  useEffect(() => {
    loadEmploye();
  }, []);

  const updateInfo = async () => {
    // console.log("sssss")
    let formField = new FormData();

    formField.append("name", name);
    formField.append("email", email);
    formField.append("phone", phone);
    formField.append("linkedin", linkedin);
    formField.append("github", github);
    if (resume !== null) {
      formField.append("resume", resume);
    }
    // debugger
    //  console.log("formfield",formField)
    try {
      // console.log("before update")
      const res = await axios({
        method: "PUT",
        url: `http://localhost:8000/api/${id}/`,
        data: formField,
      });
      // console.log("After update")

      // console.log("res",JSON.stringify(res))
      if (res) {
        // console.log("navigage")
        navigate("/employee");
        alert(`ID no. ${id} Updated Successfully
        `)
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h1>UpdateEmployee</h1>

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
              onClick={updateInfo}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
