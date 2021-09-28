/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Progress() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [selectedProgressBar, setSelectedProgressBar] = useState(0)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://pb-api.herokuapp.com/bars");
      const json = await response.json();
      setData(json)
      setSelectedProgressBar(0)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("error", error);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target
    setSelectedProgressBar(value)
  }

  const handleClick = (d) => {
    const altrData = JSON.parse(JSON.stringify(data))
    if (altrData.bars[+selectedProgressBar] + Number(d) > 0) {
      altrData.bars[+selectedProgressBar] += Number(d)
    } else {
      altrData.bars[+selectedProgressBar] = 0
    }
    setData(altrData)
  }


  return (
    <>
      {loading && <div className="loader"></div>}
      <div>
        {data?.bars?.map((d, i) => {
          return (
            <div key={i}>
              <ProgressBar progress={`${d}`} height={40} limit={data?.limit} />
            </div>
          )
        })}

        <div className="container">
          <div>
            {data?.bars?.length > 0 &&
              <select value={selectedProgressBar} onChange={handleChange}>
                {data?.bars?.map((d, i) => {
                  return <option key={i} value={i}>Progress Bar #{i + 1}</option>
                })}
              </select>}
          </div>
          <div className="button-container">
            {data?.buttons?.map((d, i) => {
              return (
                <Button key={i} className="btn secondary" onClick={() => handleClick(d)}>{d < 0 ? d : "+" + d}</Button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Progress;
