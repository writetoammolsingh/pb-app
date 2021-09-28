import React from 'react';

const ProgressBar = ({ progress, height, limit }) => {

  const isValueLessThanLimit = ((progress / limit) * 100) <= 100;
  const isValueGreaterThanLimit = ((progress / limit) * 100) > 100;

  const parentDiv = {
    position: "relative",
    height: height,
    width: '100%',
    display: "flex",
    backgroundColor: "#e9eff0",
    borderRadius: 0,
    marginBottom: 15
  }

  const childDiv = {
    height: '100%',
    width: `${isValueGreaterThanLimit ? 100 : ((progress / limit) * 100) < 0 ? 0 : ((progress / limit) * 100)}%`,
    backgroundColor: isValueLessThanLimit ? "#28B5B5" : "#f44f4f",
    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    borderRadius: 0,
  }

  const progressText = {
    color: isValueLessThanLimit ? "black" : "white",
    fontWeight: 900,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }

  return (
    <div style={parentDiv}>
      <div style={progressText}>{`${(Math.floor((progress / limit) * 100)) < 0 ? 0 : (Math.floor((progress / limit) * 100))}%`}</div>
      <div style={childDiv} />
    </div>
  )
}

export default ProgressBar;