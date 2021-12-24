import React from "react";
import "./card.css"

function Card(props){
    return(
        <>
        <div className="card div" >
        <img src={props.imgsrc} className="card-img-top ing" alt="..."/>
        <div className="card-body nm">
          <h5 className="card-title nm">{props.title}</h5>
          <p className="card-text nm">{props.text}</p>
          <a href={props.link} className="btn btn-primary">WATCH</a>
        </div>
      </div>
      </>
    );

}
export default Card;