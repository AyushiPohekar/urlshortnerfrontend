import Alert from "react-bootstrap/Alert";
import NavBar from "./navbar";
import "./app.css";

const Home = () => {
  return (
    <div className="home">
      <Alert className="alert">
      
        <p className="home2">If you dont have an account, please signup now</p>
        {<NavBar />}

        <p className="mb-0"></p>
        <hr />
        <hr />
      </Alert>
    </div>
  );
};

export default Home;
