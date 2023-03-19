import React, { useState } from "react";
import "./register.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Reg(props) {
  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [exist, setExist] = useState(false);
  const name1 = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const email1 = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/;
  const password1 = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

  function handleChange(event) {
    const { name, value } = event.target;

    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleClick() {
    if (!info.name.match(name1)) {
      setName(true);
      setError(true);
    } else setName(false);

    if (!info.email.match(email1)) {
      setEmail(true);
      setError(true);
    } else setEmail(false);

    if (!info.password.match(password1)) {
      setPassword(true);
      setError(true);
    } else setPassword(false);
    if (info.password !== info.confirmPassword) {
      setConfirmPassword(true);
      setError(true);
    } else {
      setConfirmPassword(false);
    }
    if (
      info.name.match(name1) &&
      info.email.match(email1) &&
      info.password.match(password1) &&
      info.password === info.confirmPassword
    ) {
      setName(false);
      setEmail(false);
      setPassword(false);
      setConfirmPassword(false);
      axios.post("http://localhost:5000/reg", { info }).then((res) => {
        if (res.data === "registered successfully") {
          props.finalCall(false);
        } else if (res.data === "Email already exists") {
          console.log(res.data);
          setExist(true);
        }
      });
    }
  }
  function handleLogin() {
    window.location.reload();
  }
  function handleEye() {
    setEye(true);
  }
  function handleUnseeneye() {
    setEye(false);
  }
  function handleEye1() {
    setEye1(true);
  }
  function handleUnseeneye1() {
    setEye1(false);
  }

  return (
    <div>
      <div id="register">
        <h1 className="reg-h1"> Register</h1>
        <div className="register-data">
          <p> {error ? "Please enter valid details" : ""} </p>
          <p> {exist && "Email already exists"}</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Your Name"
              required
              style={{ border: name ? "red 2px solid" : "" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput1"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="name@example.com"
              style={{ border: email ? "red 2px solid" : "" }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type={eye ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
              className="eye1"
              style={{ border: password ? "red 2px solid" : "" }}
            />
            {eye ? (
              <i
                className="fa-regular fa-eye eye6"
                onClick={handleUnseeneye}
              ></i>
            ) : (
              <i
                className="fa-regular fa-eye-slash eye6"
                onClick={handleEye}
              ></i>
            )}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword1"
            className="confirmPassword eye1"
            label="Confirm Password"
          >
            <Form.Control
              type={eye1 ? "text" : "password"}
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              style={{ border: confirmPassword ? "red 2px solid" : "" }}
            />
            {eye1 ? (
              <i
                className="fa-regular fa-eye eye3"
                onClick={handleUnseeneye1}
              ></i>
            ) : (
              <i
                className="fa-regular fa-eye-slash eye3"
                onClick={handleEye1}
              ></i>
            )}
          </FloatingLabel>
          <button className="btn1" onClick={handleClick} type="submit">
            Register
          </button>
        </div>
        <>
          <button className="btn0" onClick={handleLogin}>
            LogIn
          </button>
        </>
      </div>
    </div>
  );
}

export default Reg;
