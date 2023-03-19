import React, { useState , useEffect } from "react";
import "./dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get("creator")) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);



  const [error, setError] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const cookies = new Cookies();
  const data = cookies.get("creator");
  function handleChange(event) {
    setDate(event.target.value);
  }
  function handleChange1(event) {
    setTime(event.target.value);
  }
  function handleClick() {
    axios
    .post("http://localhost:5000/dashboard", {
      data: data,
      date,
      time,
    })
    .then((res) => {
      if (date === "" || time === "") {
        setError(true);
      } else navigate("/book");
    });
  }
  function handleDelete() {
    axios
      .post("http://localhost:5000/delete", {
        data: data,
      })
      .then((res) => {
        cookies.remove("creator");
        navigate("/");
      });
  }
  function handlelogout() {
    cookies.remove("creator");
    navigate("/");
  }
  return (
    <div className="cover">
      <>
        <button className="btn3 btn8" onClick={handleDelete}>
          Delete Account
        </button>
      </>
      <div className="box">
        <p> {error ? "Please choose valid Date and Time" : ""}</p>
        <h1 className="dash-h1"> You are in!</h1>
        <h4>Please choose Date and Time convenient for you-</h4>
        <div className="innerbox">
          <div className="box1">
            <label>Date</label>
            <input
              type="date"
              className="date"
              id="date"
              onChange={handleChange}
            ></input>
          </div>
          <div className="box1">
            <label>Time</label>
            <input
              className="time"
              type="time"
              id="time"
              onChange={handleChange1}
            ></input>
          </div>
        </div>
        <button type="submit" className="btn2" onClick={handleClick}>
          Book
        </button>
        <p className="text"> Please be on time to avoid any unconvenience.</p>
      </div>
      <>
        <button className="btn3 btn4" onClick={handlelogout}>
          LogOut
        </button>
      </>
    </div>
  );
}
export default Dashboard;
