import "./styles.css";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function App() {
  const [excuse, setExcuse] = useState("");
  const fetchUrl = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (response) => {
        setExcuse(response.data[0].excuse);
      },
    );
  };

  return (
    <div className="App">
      <h1>Generate An Excuse Not to Come</h1>
      <button onClick={() => fetchUrl("party")}>Party</button>
      <br />
      <button onClick={() => fetchUrl("family")}>Family</button>
      <br />
      <button onClick={() => fetchUrl("office")}>Office</button>
      <p> {excuse}</p>
    </div>
  );
}
