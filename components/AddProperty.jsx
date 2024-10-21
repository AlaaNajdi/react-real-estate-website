import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {toast } from 'react-toastify';
import { uploadImageToCloudinary } from '../src/utility/uploadimageurl';

const AddProperty = (props) => {

//creat obj
  const[property,setproperty]=useState({
    title:'',
    image:'',
    price:0,
    description:''
  });

  const[errors,seterrors]=useState({})

  const handlechange = (event) => {
    const inputfiled=event.target.name;
    const value=event.target.value;
    setproperty(prevStat =>{
      return{...prevStat,[inputfiled]:value}
    });
  };
const handleimagechange = (event) => {
  setproperty(prevStat => {
    return { ...prevStat, image:  event.target.files[0]};
  });
};


  const validateinput=()=>{
  const newErrors = {};
    if (!property.title) 
      newErrors.title = 'Product name is required';
    if (property.title.length < 10)
      newErrors.title =
        'title should be at least 10 characters long';
    if (property.description.length < 10)
      newErrors.description =
        'Description should be at least 10 characters long';
    if (!property.price || parseFloat(property.price) <= 0)
      newErrors.price = 'Price must be a positive number';
    if (!property.image) newErrors.image = 'Please upload a product image';
    seterrors(newErrors);
    return Object.keys(newErrors).length === 0;// Return true if no errors
  };

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (validateinput()) {
      try {
        // رفع الصورة إلى Cloudinary والحصول على رابط الصورة
        const imageUrl = await uploadImageToCloudinary(property.image);

        const newproperty = {
          id: nanoid(),
          title: property.title,
          price: property.price,
          image: imageUrl, // استخدم رابط الصورة بدلاً من الملف
          description: property.description,
        };

        alert(JSON.stringify(newproperty, null, 2));
        toast.success("Property created successfully!");

        props.onhandleaddproperty(newproperty);

        // إعادة ضبط النموذج
        setproperty({
          title: '',
          image: '',
          price: 0,
          description: ''
        });
      } catch (error) {
        console.error('Error uploading image: ', error);
        toast.error('Failed to upload image. Please try again.');
      }
    } else {
      console.log(errors);
    }
  };


  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" value={property.title} name='title' onChange={handlechange} required />
          <div>{errors.title && <span className='error'>{errors.title}</span>}</div>
        </div>
        <br />
        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" id="price" value={property.price} name='price' onChange={handlechange} required />
          <div>{errors.price && <span className='error'>{errors.price}</span>}</div>
        </div>
        <br />
        <div>
          <label htmlFor="image">Image: </label>
          <input type="file" id="image"  name='image' accept='image/*' onChange={handleimagechange} required />
          {property.image && (
          <div>
            <img
              className="user-img"
              src={URL.createObjectURL(property.image)}
              alt="Selected Preview"
              style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
            />
          </div>
        )}
          <div>{errors.image && <span className='error'>{errors.image}</span>}</div>
        </div>
        <br />
        <div>
          <label htmlFor="description">Description: </label>
          <textarea id="description" value={property.description} name='description' onChange={handlechange} required />
          <div>{errors.description && <span className='error'>{errors.description}</span>}</div>
        </div>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
