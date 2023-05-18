import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [errInfo, setErrInfo] = useState('');

  const navigate = useNavigate();

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const mobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signup = (e) => {
    e.preventDefault();
    if (username === '' || password === '' || email === '' || mobileNo === '') {
      setError(true);
      setErrInfo('Please enter all the fields');
    } else if (password !== confirmPassword) {
      setError(true);
      setErrInfo('Passwords do not match');
    } else {
      setError(false);
      let user = {
        Username: username,
        Email: email,
        MobileNo: mobileNo,
        Password: password,
        ConfirmPassword: confirmPassword,
      };
      axios.post('http://localhost:4000/signup', user).then((res) => {
        alert(res.data.message);
        setPassword('');
        setUsername('');
        setEmail('');
        setMobileNo('');
        setConfirmPassword('');
        navigate('/login');
      });
    }
  };

  const errorMessage = () => {
    return (
      <Alert variant="danger" show={error}>
        {errInfo}
      </Alert>
    );
  };

  return (
    <Form onSubmit={signup}>
      {errorMessage()}
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" value={email} onChange={emailChange} />
      </Form.Group>
      <Form.Group controlId="mobileNo">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Mobile Number"
          value={mobileNo}
          onChange={mobileNoChange}
        />
      </Form.Group>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={usernameChange}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordChange}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={confirmPasswordChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
