import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
// import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function UpdateEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [resume, setResume] = useState(null);
  const [preRes , setPreRes] = useState("")

  const [nameErr, setNameErr] = useState<any>(null);
  const [emailErr, setEmailErr] = useState<any>(null);
  const [phoneErr, setPhoneErr] = useState<any>(null);
  const [linkedinErr, setLinkedinErr] = useState<any>(null);
  const [githubErr, setGithubErr] = useState<any>(null);
  const [resumeErr, setResumeErr] = useState("");

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const handleClose = () => {
    navigate("/employee");
  };

  const loadEmploye = async () => {
    const response = await axios.get(`http://localhost:8000/api/${id}/`);
    // console.log("res", response.data);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setLinkedin(response.data.linkedin);
    setGithub(response.data.github);
    // setResume(response.data.resume)
    setPreRes(response.data.resume);
  };

  useEffect(() => {
    loadEmploye();
  }, []);
   
  const emailRegex:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const phoneRegex:RegExp = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
  const linkedinRegex:RegExp =  /(^((https?:\/\/)?((www|\w\w)\.)?)linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/
  const gitHubRegex:RegExp =  /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/

  
  const updateInfo = async () => {
    // console.log("sssss")
    let formField = new FormData();

    if (name === "") {
      setNameErr("*Please type  your name here");
    } else  {
      setNameErr("");
    }
    formField.append("name", name);


    if (email === "") {
      setEmailErr("*Please type your Email here");
    } 
    else if(!emailRegex.test(email)){
      setEmailErr("*Email is not valid")
    }else{
      formField.append("email", email)
    }


    if (phone === "") {
      setPhoneErr("*Please enter your phone number here");
    } else if(!phoneRegex.test(phone)){
      setPhoneErr("*Enter valid Phone number")
    }else{
      formField.append("phone", phone);
    }


    if (linkedin === "") {
      setLinkedinErr("*Provide your LinkedIn Profile");
    } else if (!linkedinRegex.test(linkedin)){
      setLinkedinErr("*LinkedIn URL is incorrect")
    }else{
      formField.append("linkedin", linkedin);
    }


    if (github === "") {
      setGithubErr("*Provide your Github Profile");
    } else if(!gitHubRegex.test(github)){
      setGithubErr("*GitHub URL is incorrect")
    }else{
      formField.append("github", github);
    }


    if (resume === null) {
      setResumeErr("*Please uploads your Resume (.pdf only)");
    } else {
      formField.append("resume", resume);
    }
    

    try {
      const response = await axios({
        method: "put",
        url: `http://localhost:8000/api/${id}/`,
        data: formField,
      });
      if (response) {
        // console.log("response ", response)
        // const x = JSON.stringify(name);
        // alert(`Employee Name - ${x} , added`);
        setShow(true);
      }
    } catch (err) {
      // setResumeErr('*Please upload your Resume (pdf only)')
      // setEmailErr("*Email is not valid")
    }
  }; 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="my-5 container w-75"
    >
      <h1>Update Employee</h1>

      <form>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Name</b>
          </label>
          <div className="col-sm-10 d-flex flex-column align-items-start">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="EmployeeName"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
                setNameErr("");
              }}
            />
            <span className="empty-field-text my-2">{nameErr}</span>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Email</b>
          </label>
          <div className="col-sm-10 d-flex flex-column align-items-start">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="EmployeeEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
               
              }}
            />
            <span className="empty-field-text my-2">{emailErr}</span>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Phone</b>
          </label>
          <div className="col-sm-10 d-flex flex-column align-items-start">
            <input
              type="number"
              className="form-control"
              id="input Password3"
              placeholder="Phone Number"
              name="EmployeePhone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneErr("");
              }}
            />
            <span className="empty-field-text my-2">{phoneErr}</span>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>LinkedIn</b>
          </label>
          <div className="col-sm-10 d-flex flex-column align-items-start">
            <input
              type="text"
              className="form-control"
              id="input Password3"
              placeholder="LinkedIn URL"
              name="EmployeeLinkedIn"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
                setLinkedinErr("");
              }}
            />
            <span className="empty-field-text my-2">{linkedinErr}</span>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Github</b>
          </label>
          <div className="col-sm-10 d-flex flex-column align-items-start">
            <input
              type="text"
              className="form-control"
              id="input Password3"
              placeholder="GitHub URL"
              name="EmployeeGithub"
              value={github}
              onChange={(e) => {
                setGithub(e.target.value);
                setGithubErr("");
              }}
            />
            <span className="empty-field-text my-2">{githubErr}</span>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-2 col-form-label">
            <b>Resume</b>
          </label>
          <div className="col-sm-10 d-flex flex-column align-items-start">
           
            <input
              type="file"
              accept="application/pdf,application/vnd.ms-excel"
              className="form-control"
              name="resume"
              // value={preRes}
              // value="xya"
              
              onChange={(e: any) => {
                setResume(e.target.files[0]);
                setResumeErr("");
              }}
            />
            <span className="empty-field-text my-2"><a target="blank" id="resume" style={{wordBreak:"break-all"}} href={`${preRes}`}>
           <i>Current File - </i> {preRes}
          </a>  </span><span className="empty-field-text my-2">{resumeErr}  </span> 
          </div>
        </div>

        <div className="form-group row my-3">
          <div className="col-sm-10 ">
            <button
              type="button"
              className="btn btn-success px-5 py-2"
              onClick={updateInfo}
              style={{ fontWeight: "600", fontSize: "1rem" }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>Employee id - {id} Updated Successfully </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </motion.div>
  );
}
