import React from 'react';
import courses from '../../Coursedata';

const Cart = (props) => {
const cart = props.cart;
let total =0;
for(let i = 0;i<cart.length;i++)
{
const course = cart[i];
total=total+course.price;

}
    return (
        <div>
            <h2> Course Enroll Information  :</h2>
    <h3> Enroll Courses :{cart.length}</h3>
    <h4>Price :$ {total.toFixed(1)}</h4>
    <button className="btn btn-success">Submit</button>
            
        </div>
    );
};

export default Cart;