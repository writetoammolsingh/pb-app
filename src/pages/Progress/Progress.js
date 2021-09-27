/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Progress() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({});

  const [progress, setProgress] = useState("")

  let barData = data?.bars;
  const buttonData = data?.buttons;
  const limit = data?.limit;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://pb-api.herokuapp.com/bars");
      const json = await response.json();
      setData(json)
    } catch (error) {
      console.log("error", error);
    }
  };


  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const handleClick = (d) => {
    document.getElementById(`progress-${value}`).style.width = parseInt(document.getElementById(`progress-${value}`).style.width.split("%")[0]) + d + "%"
  }

  return (
    <div>
      <h1>Progress</h1>
      {barData?.map((d, i) => {
        return (
          <div key={i}>
            <ProgressBar id={`progress-${i}`} bgcolor="orange" progress={`${d}`} height={30} />
          </div>
        )
      })}

      <div style={{ display: "flex" }}>
        <select value={value} onChange={handleChange}>
          {barData?.map((d, i) => {
            return <option value={i}>Progress Bar #{i + 1}</option>
          })}
        </select>
        {buttonData?.map((d, i) => {
          return (
            <div key={i}>
              <button onClick={() => handleClick(d)}>{d}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Progress;
