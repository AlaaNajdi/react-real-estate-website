//@ts-nocheck
import React from 'react'
import { useState } from 'react';
import { FaOpencart } from "react-icons/fa6";

// PropertyTitle Component
const PropertyTitle = ({ title }) => {
  return <h5>{title}</h5>;
};

// PropertyPrice Component
const PropertyPrice = ({ price }) => {
  return <p>Price: {price}</p>;
};

// PropertyImage Component
const PropertyImage = ({ image, title }) => {
  return <img src={image} alt={title} />;
};


const Property = (props) => {
  const{property,onDeleteofcart}=props;
const{id,image,title,price,description} =property;

const[cartpropertycount,setcartpropertycount]=useState(0);

const addtocart=(property)=>{
  console.log(props.property);
};
const deleteofcart=(id)=>{
  onDeleteofcart(id);
};

  return (
<article className='property'>
      <FaOpencart />
      <h1>number of item in cart: {cartpropertycount}</h1>
      <PropertyImage image={image} title={title} />
      <PropertyTitle title={title} />
      <PropertyPrice price={price} />
      <p>Description: {description}</p>
      <button onClick={addtocart}>add to cart</button>
      <button onClick={()=>deleteofcart(id)}>delete of cart</button>
  </article>
  )
}

export default Property;
