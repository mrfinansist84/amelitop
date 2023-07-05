import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { getAccessTokenRequest } from '../actions';

export const LoginForm: React.FC<any> = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getAccessTokenRequest(form))
  };

  const handleFormChange = (e: any) => {
    setForm({
      ...form,
      [e.target.type]: e.target.value
    })
  }

  return (
      <Card className="login-form">
         <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={form.email} onChange={handleFormChange} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={form.password} onChange={handleFormChange} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} className="login-btn">
              Login
            </Button>
          </Form>
         </Card.Body>
    </Card>
  )
}
