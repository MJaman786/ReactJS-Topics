import React, { useState } from 'react';

const UserForm = () => {

  const [formdata, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handelChange = (e) => {
    setData({ ...formdata, [e.target.name]: e.target.value })
  }

  const clearData = () => {
    setData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const [saveData, setsaveData] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    setsaveData(formdata)
    clearData();
  }
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          {/* <!-- Form Card --> */}
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">User Registration</h2>

            <form onSubmit={handelSubmit}>
              {/* <!-- Username --> */}
              <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  onChange={handelChange}
                  value={formdata.username}
                  required
                />
              </div>

              {/* <!-- Email --> */}
              <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handelChange}
                  value={formdata.email}
                  required
                />
              </div>

              {/* <!-- Password --> */}
              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handelChange}
                  value={formdata.password}
                  required
                />
              </div>

              {/* <!-- Confirm Password --> */}
              <div className="mb-4">
                <label for="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handelChange}
                  value={formdata.confirmPassword}
                  required
                />
              </div>

              {/* <!-- Submit --> */}
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>

          {/* <!-- Data Display Container --> */}
          <div className="card mt-4 p-3 shadow-sm">
            <h4 className="text-center">Submitted Data</h4>
            <ul className="list-unstyled mb-0">
              <li><strong>Username:</strong>{saveData.username}</li>
              <li><strong>Email:</strong>{saveData.email}</li>
              <li><strong>Password:</strong>{saveData.password}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserForm;
