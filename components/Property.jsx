//@ts-nocheck
import React from 'react'

import { useState } from 'react';
import { FaOpencart } from "react-icons/fa6";
import PropertyTitle from '../components/PropertyTitle';
import PropertyPrice from '../components/PropertyPrice';
import PropertyImage from '../components/PropertyImage';



    const Property = (props) => {
    const{property,onDeleteofcart,onhandleupdateproperty}=props;
    const{id,image,title,price,description} =property;

    const[cartpropertycount,setcartpropertycount]=useState(0);


    const deleteofcart=(id)=>{
    onDeleteofcart(id);
    };


    return (
    <article className='property'>
    <FaOpencart />

    <PropertyImage image={image} title={title} />
    <PropertyTitle title={title} />
    <PropertyPrice price={price} />
    <p>Description: {description}</p>
    <button onClick={()=>deleteofcart(id)}>delete of cart</button>
    </article>
    )
    }

export default Property;