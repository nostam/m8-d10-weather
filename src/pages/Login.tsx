import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchingInfo, handleError } from "../store/reducers/userSlice";
export default function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      dispatch(fetchingInfo);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        JSON.stringify(userInfo)
      );
      if (!data) throw new Error("fetch failed");
    } catch (error) {
      dispatch(handleError(error));
      console.log(error);
    }
  }
  return (
    <Container>
      <Form onSubmit={(e) => submitData(e)}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={userInfo.username}
            placeholder="Enter Username"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={userInfo.password}
            placeholder="Password"
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
