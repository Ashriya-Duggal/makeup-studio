import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Login(props) {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const cookies = new Cookies();
  const [error1, setError1] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleClick() {
    axios.post("http://localhost:5000/login", { data }).then((res) => {
      if (res.data === "matched") {
        cookies.set("creator", data.email, { maxAge: 120, path: "/" });
        navigate("/Dashboard", { state: { data } });
      } else if (res.data !== "matched") setError1(res.data);
    });
  }
  function handleEye() {
    setEye(true);
  }
  function handleUnseeneye() {
    setEye(false);
  }

  return (
    <div className="background">
      <div id="login">
        <>
          <h1 className="head"> Login</h1>
          <div className="login-data">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={eye ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="eye1"
                onChange={handleChange}
              />{" "}
              {eye ? (
                <i
                  className="fa-regular fa-eye eye"
                  onClick={handleUnseeneye}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye-slash eye"
                  onClick={handleEye}
                ></i>
              )}
            </FloatingLabel>
            <p className="regis">
              New User?
              <span
                className="finalCall"
                onClick={() => {
                  props.finalCall(true);
                }}
              >
                Register
              </span>
            </p>
            <p> {error1 && "Invalid Email or Password"} </p>
            <button className="btn1" type="submit" onClick={handleClick}>
              Login
            </button>
          </div>
        </>
      </div>
    </div>
  );
}
export default Login;
