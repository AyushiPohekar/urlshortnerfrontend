import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./app.css";
const SignUp = () => {
  const [name, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();
    var datatwo = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://urlshortner-2w3k.onrender.com/api/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: datatwo,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/welcome");
      })
      .catch(function (error) {
        console.log(error);
      });

    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "https://passwordreset-api.herokuapp.com/api/user",
    //     { name, email, password },
    //     config
    //   );

    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   console.log(JSON.stringify(data));
    //   console.log("hello");
    //   navigate("/welcome");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="signdiv">
    <Container className="signcontainer">
    <form onSubmit={postData}>
      <h3 className="labl">Sign Up</h3>
      <div className="mb-3">
        <label className="labl">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label className="labl">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="labl">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right labl">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
    </Container>
    </div>
  );
};

export default SignUp;
