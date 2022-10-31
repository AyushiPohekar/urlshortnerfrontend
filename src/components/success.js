import Alert from "react-bootstrap/Alert";

import "./app.css";

const Success = () => {
  return (
    <div className="home">
      <Alert variant="success">
        <Alert.Heading>password reset successfully </Alert.Heading>

        <hr />
      </Alert>
    </div>
  );
};

export default Success;
