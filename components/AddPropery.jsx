import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid'

const AddPropery = (props) => {
  const[title,settitle]=useState("");
    const[imageurl,setimageurl]=useState("");
    const[price,setprice]=useState(0);
    const[description,setdescription]=useState("");

  const handletitlechange=(event)=>{
    settitle(event.target.value);
  }
    const handleimageurlchange=(event)=>{
    setimageurl(event.target.value);
  }
  const handlepricechange=(event)=>{
    setprice(event.target.value);
  }
  const handledescriptionchange=(event)=>{
    setdescription(event.target.value);}

    const handlesubmit=(event)=>{
    event.preventDefault();
    const newproperty={
      id: nanoid(),
      title: title,
      price: price,
      imageurl: imageurl,
      description: description,
    };
    alert(JSON.stringify(newproperty,null,2));

    props.onhandleaddproperty(newproperty);

    //reset
    settitle("");
    setprice(0);
    setimageurl("");
    setdescription("");
  };
  return (
    <div>
      <h2>add property</h2>
            <form onSubmit={handlesubmit}>
              <div>
                <label htmlFor="title">title: </label>
                <input type="text" id="title" value={title} onChange={handletitlechange} required/>
                </div>
<br/>
                <div>
                <label htmlFor="price">price: </label>
                <input type="number" id="price" value={price} onChange={handlepricechange}required/>
                </div>
<br/>
                <div>
                <label htmlFor="image">image URL: </label>
                <input type="text" id="image" value={imageurl} onChange={handleimageurlchange}required/>
                </div>
<br/>
              <div>
                <label htmlFor="description">description: </label>
                <textarea name='' id='description'value={description} onChange={handledescriptionchange}required></textarea>
                </div>
<br/>
                <button type='submit'>Add</button>
            </form>
    </div>
  )
}

export default AddPropery;
