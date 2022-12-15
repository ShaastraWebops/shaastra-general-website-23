import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_OTP = gql`
  mutation GetPasswordOTP($email: String!) {
    getPasswordOTP(email: $email)
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [getotp, { data: isSent, error: opterror, loading: isloadingotp }] =
    useMutation(GET_OTP);

  const handleSubmit = (e) => {
    e.preventDefault();
    getotp({
      variables: { email: email },
    });
  };

  if (isloadingotp) {
    return <p>Loading...</p>;
  }
  if (opterror) {
    return <p>{opterror.message}</p>;
  }
  if (isSent) {
    navigate("/forgotpassword/resetpassword");
  }

  return (
    <section id="login">
      <center>
        <div className="login-signup">
          <h2>FORGOT PASSWORD</h2>
        </div>
      </center>
      <center>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="type-1 email"
            placeholder="EMAIL ID"
            outline="none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button type="submit" className="type-2">
            GET RESET OTP
          </button>
        </form>
      </center>
    </section>
  );
};

export default ForgotPassword;
