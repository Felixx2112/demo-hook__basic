import React, { useState, useEffect } from "react";

function formatDate(date) {
  if (!date) return "";
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours} : ${minutes} : ${seconds}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      //HH:MM:SS: gio gio :phut phut: giay giay
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);
    console.log("componentDidMount");
    return () => {
      console.log("componentUnMount");
      //cleanup
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default Clock;
