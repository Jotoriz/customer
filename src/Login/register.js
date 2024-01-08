import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserAction from "../actions/user.actions";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    phoneNumber: "",
    password: "",
  });

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserAction.signup(formData));
  };

  if (auth.authenticate) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="allForm allRegister">
          <h2 className="text-center">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter your Username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="number"
                placeholder="Enter your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="submit primary" type="submit" block>
              Register
            </Button>
          </Form>
          <Form style={{ textAlign: "center" }}>
            <label>Already have an account?</label>
            <Link to={"/login"}>
              <a>Login</a>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
