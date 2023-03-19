import React from "react";
import "./services.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
</style>

function Services() {
  return (
    <div id="services">
      <h1 className="head1">Services</h1>
      <CardGroup className="main-services">
        <Card>
          <Card.Img
            variant="top"
            className="img"
            alt="photo"
            src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <Card.Body>
            <Card.Title className="h">Skin</Card.Title>
            <Card.Text className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo diam sit amet maximus aliquet. Maecenas ut finibus augue.
              Vivamus et finibus velit, eu porttitor justo. Sed a tellus quam. .
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="img"
            src="https://images.pexels.com/photos/2921424/pexels-photo-2921424.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <Card.Body>
            <Card.Title className="h">Makeup</Card.Title>
            <Card.Text className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo diam sit amet maximus aliquet. Maecenas ut finibus augue.
              Vivamus et finibus velit, eu porttitor justo. Sed a tellus quam.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="img"
            src="https://images.pexels.com/photos/1321916/pexels-photo-1321916.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <Card.Body>
            <Card.Title className="h">Hair</Card.Title>
            <Card.Text className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo diam sit amet maximus aliquet. Maecenas ut finibus augue.
              Vivamus et finibus velit, eu porttitor justo. Sed a tellus quam.{" "}
              that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <div>
        <h3 className="login-req">
          {" "}
          To know Offers and Book your Appointments , please Login.
        </h3>
      </div>
    </div>
  );
}

export default Services;
