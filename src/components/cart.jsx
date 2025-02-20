import React from 'react'


function cart({ props }) {
  return (
    <div>
      <img src={props.img} alt="User" />
      <h3>{props.name}</h3>
      <p>Email: {props.mail}</p>
      <p>Phone: {props.phone}</p>
      <p>Address: {props.address}</p>
      
    </div>
  )
}

export default cart
