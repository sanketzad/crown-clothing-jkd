import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.css";
// import {
//   auth,
//   createUserProfileDocument,
// } from "../../firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpstart } from "../../redux/user/user.actions";

const SignUp = ({ signUpstart }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpstart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpstart: (userCredentials) => dispatch(signUpstart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
