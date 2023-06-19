import React from "react";
import "./Card.scss";
const Card = (item) => {
  return (
    <>
      <div className="card">
        <h2 className="title">{item.title}</h2>
        <div className="imagecontainer">
          <img className="image" src={item.image} alt="image" />
          <div className="desccontainer">
            <span className="desc">{item.desc}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
