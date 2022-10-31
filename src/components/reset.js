import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./app.css"
import { Container } from "react-bootstrap";

const ResetPassword = () => {
  //const UserContext = createContext();
  //const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      email: email,
    });

    var config = {
      method: "post",
      url: "https://urlshortner-2w3k.onrender.com/api/user/forgotPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/toast");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="signdiv">
    <Container className="signcontainer">
    <form onSubmit={postData}>
      <h3 className="labl">Forget-Password</h3>

      <div className="mb-3">
        <label className="labl">Enter Your Email Address:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary bttn">
          Submit
        </button>
      </div>
    </form>
    </Container>
    </div>
  );
};

export default ResetPassword;
