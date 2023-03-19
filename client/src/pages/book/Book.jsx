import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./book.css";
import Cookies from "universal-cookie";
function Book() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.get("creator")) {
      navigate("/login");
    }
  // eslint-disable-next-line
}, []);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const cookies = new Cookies();
  const data = cookies.get("creator");
  axios
    .post("http://localhost:5000/book", {
      data: data,
    })
    .then((res) => {
      setName(res.data.name);
      setDate(res.data.date);
      setTime(res.data.time);
      console.log(name, date, time);
    });
  function handlelogout() {
    cookies.remove("creator");
    navigate("/");
  }
  return (
    <div className="head-cover5">
      <div className=" card8">
        <Card className="card">
          <Card.Body>
            <Card.Title>Booking Successfull!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ color: "red" }}>
              Hello {name}!
            </Card.Subtitle>
            <Card.Text className="offer">
              Your booking is been accepted by Gifty'z Makeup Studio for {date}
              <br />
              at <br />
              {time}
            </Card.Text>
            <p>
              Please bring the screenshot of this to show your appointment
              details and avail 20% off on all services.
            </p>
          </Card.Body>
        </Card>
      </div>
      <>
        <button className="btn3 btn4 btn5" onClick={handlelogout}>
          LogOut
        </button>
      </>
    </div>
  );
}

export default Book;