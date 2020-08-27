import React from 'react';
import './Courselist.css'
import {card } from 'react-bootstrap/Card';

const Courselist = (props) => {
 console.log(props);
 const{name,mentor,rating,price,totalRating,img} = props.course; //using destructure get name... values from course using props(property)
    return (
        <div className="information-container content">
           
           <div className="   flex-container">
           <img class="card-img-top" src={img} alt="Card image cap" alt ="" />
           <div className="card-body">
           <h5 className="card-title">Name:{name} </h5>
    <h6 className="card-text">Mentor :{mentor}</h6>
    <h6 className="card-text">Rating :{rating}</h6>
    <h6 className="card-text">Price :$ {price}</h6>
    <h6 className="card-text">Totalrating :{totalRating}</h6>
    <button className="btn btn-success" onClick={ () =>props.handleAddCourse(props.course)}>Enroll Now</button>
           </div>
           </div>
           
        </div>
    );
};

export default Courselist;