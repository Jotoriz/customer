import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { URL_CUSTOMER_SIGNIN } from "../API/config";
import AuthAction from "../actions/auth.actions";
import UserAction from "../actions/user.actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(AuthAction.login(userData));
  };

  if (auth.authenticate) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="allForm">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button className="submit primary" type="submit" block>
              Login
            </Button>
          </Form>

          <Form style={{ textAlign: "center" }}>
            <lable>Bạn chưa có tài khoản?</lable>
            <Link to={"/register"}>
              <a>Đăng ký</a>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
