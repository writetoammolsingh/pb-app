import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/Button/Button';
import right_arrow from "../../assets/icons/right-arrow.svg";
import coffee_icon from "../../assets/icons/coffee.png";

function Home() {
  const history = useHistory();

  function handleRedirect() {
    history.push("/progress");
  }

  return (
    <div data-testid="home-1">
      <h1>Progress App</h1>
      <Button className="btn primary" onClick={handleRedirect}>
        Click here to proceed
        <img src={right_arrow} alt="arrow" className="image-1" />
      </Button>
      <div className="footer">
        Made with <img src={coffee_icon} className="image" height="20px" width="20px" alt="coffee" /> by Anmol Singh Chhabra&#169;
      </div>
    </div>
  )
}

export default Home;
