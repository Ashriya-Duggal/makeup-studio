import React, { useEffect } from "react";
import "./home.css";
import Services from "../services/Services";
import Register from "../register/Register";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,900&display=swap');
</style>;
const cookies = new Cookies();

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get("creator")) {
      navigate("/Dashboard");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div id="home">
        <div className="nav">
          <ul className="navbar-ul">
            <li>
              <a className="nav-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-item" href="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
        <h1 className="name"> Gifty'z Make Up Studio </h1>
        <p className="tagline"> .....Love Yourself</p>
        <Services />
        <Register />
      </div>
    </>
  );
}

export default Home;
