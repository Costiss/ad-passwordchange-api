import React, { ChangeEvent, useState } from 'react';
import { APIURL } from '../utils/apiUrl';
import axios from 'axios';
export const Form = () => {
  const [value, setValue] = useState({
    oldPass: '',
    newPass: '',
    confirm: '',
    user: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
        if (value.newPass === value.confirm) {
          axios
            .post(APIURL + '/change', value)
            .then((res) => {
              setSuccess(res.data.msg);
            })
            .catch((err) => {
              setError(err.response.data.msg);
            });
        } else {
          setError("Passwords Don't Match");
        }
      }}
    >
      <fieldset>
        <div className="form-group">
          <label htmlFor="user" className="form-label mt-4">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            placeholder="username"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="oldPass" className="form-label mt-4">
            Old Password
          </label>
          <input
            type="password"
            className="form-control"
            id="oldPass"
            name="oldPass"
            placeholder="Password"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPass" className="form-label mt-4">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPass"
            name="newPass"
            placeholder="Password"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm" className="form-label mt-4">
            Confirm New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm"
            name="confirm"
            placeholder="Password"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <button className="btn btn-success" style={{ marginTop: '20px' }}>
          Send
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </fieldset>
    </form>
  );
};
