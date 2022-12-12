import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_ME = gql`
  query Query {
    me {
      mobile
      name
      email
      id
    }
  }
`;

const CHANGE_NAME = gql`
  mutation EditProfile($data: EditProfileInput!) {
    editProfile(data: $data)
  }
`;

const LOGOUT = gql`
  mutation Mutation {
    logoutUser
  }
`;

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    department: "",
    city: "",
    state: "",
    address: "",
  });
  // const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ME);
  const [editFunction] = useMutation(CHANGE_NAME, {
    refetchQueries: [{ query: GET_ME }],
  });
  const [logout, { data: isLogout }] = useMutation(LOGOUT);

  const handleSubmit = (e) => {
    e.preventDefault();
    editFunction({
      variables: {
        data: {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          college: user.college,
          department: user.department,
          city: user.city,
          state: user.state,
          address: user.address,
        },
      },
    });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  if (loading) {
    <p>Loading...</p>;
  }
  if (error) {
    <p>{error.message}</p>;
  }

  if (isLogout) {
    navigate("/");
  }

  if (data) {
    return (
      <section id="signup">
        <center>
          <div className="login-signup">
            <h1>EDIT PROFILE</h1>
          </div>
        </center>
        <center>
          <form className="signup_form" onSubmit={handleSubmit}>
            <input
              className="type-1 name"
              placeholder="NAME"
              outline="none"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            ></input>
            <div>
              <input
                className="type-3-1 type-3 email"
                placeholder="EMAIL ID"
                outline="none"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              ></input>
              <input
                className="type-3-2 type-3 phone"
                placeholder="PHONE NO."
                outline="none"
                value={user.mobile}
                onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              ></input>
            </div>
            <div>
              <input
                className="type-3-1 type-3 college"
                placeholder="COLLEGE"
                outline="none"
                value={user.college}
                onChange={(e) => setUser({ ...user, college: e.target.value })}
              ></input>
              <input
                className="type-3-2 type-3 branch"
                placeholder="DEPARTMENT"
                outline="none"
                value={user.department}
                onChange={(e) =>
                  setUser({ ...user, department: e.target.value })
                }
              ></input>
            </div>
            <div>
              <input
                className="type-3-1 type-3 city"
                placeholder="CITY"
                outline="none"
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              ></input>
              <input
                className="type-3-2 type-3 state"
                placeholder="STATE"
                outline="none"
                value={user.state}
                onChange={(e) => setUser({ ...user, state: e.target.value })}
              ></input>
            </div>
            <input
              className="type-1 address"
              placeholder="ADDRESS"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            ></input>
            <button className="type-2" type="submit">
              CONFIRM EDIT
            </button>
          </form>
          <div id="log-out">
            <button className="type-2" onClick={(e) => handleLogout(e)}>
              LOGOUT
            </button>
          </div>
        </center>
      </section>
    );
  }
};

export default EditUser;
