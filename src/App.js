import "./App.css";
import Url from "./components/urlPage";
import Table from "./components/table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/Login";

import ForgotPassword from "./components/forgetPassword";
import Toastnew from "./components/toast";
import ResetPassword from "./components/reset";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route
          path="/welcome"
          element={
            <>
              <Url />
              <Table />
            </>
          }
          exact
        />
        <Route path="/toast" element={<Toastnew />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/success" element={<Url />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/ResetPassword" element={<ResetPassword />} exact />
        <Route path="/forgetPassword" element={<ForgotPassword />} exact />
        <Route
          path="/forgetPassword/:token"
          element={<ForgotPassword />}
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
