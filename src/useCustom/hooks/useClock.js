import { useState, useEffect } from "react";

function formatDate(date) {
  //su dung slice cho dep hon
  if (!date) return "";
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours} : ${minutes} : ${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const newTime = new Date();
      const newTimeString = formatDate(newTime);

      setTimeString(newTimeString);
    }, 1000);

    // clear setInterval
    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return { timeString }; // return ve dang object sau nay minh co the them cac key khac nua
}

export default useClock;
