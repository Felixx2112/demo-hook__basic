import { useState, useEffect, useRef } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "aqua",
    "orange",
    "purple",
    "brown",
    "tangerine",
    "peacock blue",
  ];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    console.log(newIndex);
    // console.log(currentIndex);
    newIndex = Math.trunc(Math.random() * 11);
  }
  console.log(newIndex);
  console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  //change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      // console.log("First color : ", color);
      // console.log("Change color :", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);
    console.log("DidMount");

    return () => {
      console.log("UnMount");
      clearInterval(colorInterval);
    };
  }, []); //neu dependencies co tham so thi no se Unmout sau moi lan Didmount, neu khong muon thi su dung useRef()

  return { color };
}

export default useMagicColor;
