import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/progress");
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go To Progress</button>
    </div>
  )
}

export default Home;
