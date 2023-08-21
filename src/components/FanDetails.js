import React, { useState, useEffect } from "react";
import "./FanDetails.css";

function FanDetails() {
  const [fan, setFan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFanDetails() {
      setLoading(true);
      try {
        let response = await fetch("http://localhost:8080/fan");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();

        if (data && data.length > 0) {
          setFan(data[0]);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFanDetails();
  }, []);

  const handleSpeedClick = async () => {
    try {
      let response = await fetch("http://localhost:8080/fan/pullSpeedCord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setFan(data);
    } catch (error) {
      console.error("There was an issue updating fan speed:", error);
    }
  };

  const handleDirectionClick = async () => {
    try {
      let response = await fetch(
        "http://localhost:8080/fan/pullDirectionCord",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setFan(data);
    } catch (error) {
      console.error("There was an issue updating fan direction:", error);
    }
  };

  return (
    <div className="fan-container">
      <h2>Fan Control Panel</h2>
      <div className="controls">
        <button onClick={handleSpeedClick}>
          <i className="fa fa-tachometer" aria-hidden="true"></i> Click to
          Increase Speed
        </button>
        <button onClick={handleDirectionClick}>
          <i className="fa fa-exchange" aria-hidden="true"></i> Click to Change
          Direction
        </button>
      </div>
      {loading ? (
        <p>
          <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>{" "}
          Loading...
        </p>
      ) : error ? (
        <p>
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>{" "}
          Error: {error}
        </p>
      ) : fan ? (
        <div className="display">
          <p>
            <i className="fa fa-tachometer" aria-hidden="true"></i> Speed:{" "}
            {fan.speed}
          </p>
          <p>
            <i className="fa fa-exchange" aria-hidden="true"></i> Direction:{" "}
            {fan.direction}
          </p>
          <p>
            <i className="fa fa-power-off" aria-hidden="true"></i> Status:{" "}
            {fan.status}
          </p>
        </div>
      ) : (
        <p>No fan data available.</p>
      )}
    </div>
  );
}

export default FanDetails;
