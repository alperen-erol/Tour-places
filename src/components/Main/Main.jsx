import React from "react";
import { data } from "../../utility/data";
import Card from "./Card/Card";
import "./main.scss"
const Main = () => {
  return (
    <>
      <div className="cardcontainer">
      {data.map((item) => 
        <Card {...item}/>
      )}
      </div>
    </>
  );
};

export default Main;
