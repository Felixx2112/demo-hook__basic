// tao mot component ColorBox, co background mac dinh mau deeppink
//1.Khi click len box, doi background ngau nhien thanh mot trong cac mau
//['deeppink', 'green', 'yellow', 'black', 'blue']
//2. giu mau background cua box sau khi reload trinh duyet

//Phan tich
//1. ColorBox
// . prop: N/A
// . State: color (background color)
// . render: div.color-box with backgroundColor = color
// . Handle onClick: doi mau sang mot trong cac mau trong danhs ach duoc cung cap
//
//2.
// . Chua dung useEffect()
// . Moi lan doi mau luu vao trong localStorage
// . Set initialState cua color la gia tri tu trong localStorage
// . Su dung callback initialState de chi thuc hien mot lan

import React, { useState } from "react";
import "./style.css";

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5); //math.random tra ve so thap phan luon luon nho hon 1, math.trunc(): tra ve phan nguyen cua mot so thap phan
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink"; // neu lan dau khong co gia tri thi la deepink
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    //get random color -> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
