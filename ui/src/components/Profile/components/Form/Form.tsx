import * as React from 'react';
import Form from 'react-bootstrap/Form';

import './Form.scss';

interface Props {
  user: any;
  handleChanges: (e: any) => void;
  readOnlyMode: boolean;
}

export const ProfileForm: React.FC<Props> = ({ handleChanges, user, readOnlyMode }) => {
  return (
    <div>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                disabled={readOnlyMode}
                onChange={handleChanges}
                value={user.email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                disabled={readOnlyMode}
                onChange={handleChanges}
                value={user.password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            {!readOnlyMode && (
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>confirmPassword</Form.Label>
                <Form.Control
                  onChange={handleChanges}
                  type="password"
                  placeholder="confirmPassword"
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="first_name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                disabled={readOnlyMode}
                onChange={handleChanges}
                value={user.first_name}
                type="text"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="last_name">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                disabled={readOnlyMode}
                onChange={handleChanges}
                value={user.last_name}
                type="text"
                placeholder="Surname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                disabled={readOnlyMode}
                onChange={handleChanges}
                value={user.phone}
                type="text"
                placeholder="Phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="role">
              <Form.Label>User type</Form.Label>
              <Form.Select
                value={user.role}
                onChange={handleChanges}
                disabled={readOnlyMode}
              >
                <option value="STUDENT">Student</option>
                <option value="TEACHER">Teacher</option>
                <option value="ADMIN">Admin</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
  )
};
