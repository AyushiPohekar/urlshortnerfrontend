import { useState } from "react";
import axios from "axios";
import qs from "qs";
import "../App.css";

const Url = () => {
  const postData = (e) => {
    e.preventDefault();

    var data = qs.stringify({
      full: state,
    });
    var config = {
      method: "post",
      url: "https://urlshortner-2w3k.onrender.com/shorturl",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [state, setState] = useState();
  return (
    <div className="url">
    
      <h1 className="urltitle">URL SHORTNER</h1>
      <form onSubmit={() => postData}>
        <div className=" urlform">
          <input
            type="text"
            className="form-control "
            placeholder="Enter URL"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <button type="submit" className="urlbtn">Shrink</button>
        </div>
      </form>
    </div>
  );
};

export default Url;
