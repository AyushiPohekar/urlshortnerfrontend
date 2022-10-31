import Alert from "react-bootstrap/Alert";

import "./app.css";

const Welcome = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <div className="welcome">
        <p>welcome to your account</p>
      </div>

      <hr />

      <p className="mb-0">Have a great day</p>
    </Alert>
  );
};

export default Welcome;
