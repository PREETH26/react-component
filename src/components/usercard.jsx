import React from 'react';
import img from "../assets/react.svg"
import Cart from './cart'


function Usercard() {
    const checker={
        img: img,
        name: 'Rahul',
        mail: 'Rahul@gmail.com',
        phone: '+91 9875461257',
        address: 'Delhi',
    }
  return (
    <div>
      <Cart props={checker}/>
    </div>
  );
}

export default Usercard;
