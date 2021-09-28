import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/Button/Button';
import right_arrow from "../../assets/icons/right-arrow.svg";
import coffee_icon from "../../assets/icons/coffee.png";

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
      <div className="footer">
        Made with <img src={coffee_icon} className="image" height="20px" width="20px" alt="coffee" /> by Anmol Singh Chhabra&#169;
      </div>
    </div>
  )
}

export default Home;
