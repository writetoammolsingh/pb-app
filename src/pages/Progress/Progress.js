import React, { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const URL = "https://pb-api.herokuapp.com/bars";

function Progress({ data, loading }) {
  const [progressData, setProgressData] = useState({})
  const [selectedProgressBar, setSelectedProgressBar] = useState(0)

  useEffect(() => {
    setProgressData(data)
    setSelectedProgressBar(0)
  }, [data])

  const handleChange = (e) => {
    const { value } = e.target
    setSelectedProgressBar(value)
  }

  const handleClick = (d) => {
    const altrData = JSON.parse(JSON.stringify(progressData))
    const nextValue = altrData.bars[+selectedProgressBar] + Number(d)

    if (nextValue > 0) {
      altrData.bars[+selectedProgressBar] = nextValue
    }
    else altrData.bars[+selectedProgressBar] = 0

    setProgressData(altrData)
  }

  return (
    <>
      {loading && <div className="loader"></div>}
      <div data-testid="progress-1">
        {progressData?.bars?.map((d, i) => {
          return (
            <div key={i}>
              <h6>{`Progress Bar #${i + 1}`}</h6>
              <ProgressBar progress={`${d}`} limit={progressData?.limit} />
            </div>
          )
        })}

        <div className="container">
          <div>
            {progressData?.bars?.length > 0 &&
              <select value={selectedProgressBar} onChange={handleChange}>
                {progressData?.bars?.map((d, i) => {
                  return <option key={i} value={i}>Progress Bar #{i + 1}</option>
                })}
              </select>}
          </div>
          <div className="button-container">
            {progressData?.buttons?.map((d, i) => {
              return (
                <Button key={i}
                  className="btn secondary"
                  onClick={() => handleClick(d)}>
                  {d < 0 ? d : "+" + d}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

const StoreMocker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(URL);
      const json = await response.json();
      setData(json)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("error", error);
    }
  };

  return (
    <Progress
      data={data}
      loading={isLoading}
    />
  )
}

export { StoreMocker, Progress }
