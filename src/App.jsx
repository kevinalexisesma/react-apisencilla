import React, { Suspense } from "react";
import { useFetch } from "./useFetch";
import { fetchData } from "./fetchData";
import "./App.css";

const apiData = fetchData("http://localhost:8080/app/show");

function App() {
  const data = apiData.read();

  return (
    <div className="App">
      <h1>Users from Apisencilla</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
export default App;
