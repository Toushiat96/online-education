import React from 'react';
import Coursedata from '../../Coursedata';
import { useState } from 'react';
import Courselist from '../Courselist/Courselist';
import Cart from '../Cart/Cart';
import './Courseitem.css'

const Courseitem = () => {
const first15 = Coursedata;
console.log(first15);
const [courses ,setCourses] = useState(first15); //here fakeData array(15) stored in courses
const [cart, setCart] = useState([]); //initially  cart value = empty arry
const handleAddCourse = (courses) =>{
// console.log('Add course',courses);
const newcart = [...cart,courses] //here newcart value is array with full of data
setCart(newcart);
}
    return (
        <div className="course-container">
        <div className="product-container flex-container">
        {
            courses.map( course => <Courselist course ={course} handleAddCourse={handleAddCourse}></Courselist>)
            
        }
        </div>
        <div className="cart">
        <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Courseitem;