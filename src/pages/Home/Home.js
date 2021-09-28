import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/Button/Button';
import right_arrow from "../../assets/icons/right-arrow.svg";

function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/progress");
  }

  return (
    <div>
      <h1>Progress.ly</h1>
      <Button className="btn primary" onClick={handleClick}>
        Proceed to App
        <img src={right_arrow} alt="arrow" style={{ marginLeft: "0.5rem" }} />
      </Button>
    </div>
  )
}

export default Home;
