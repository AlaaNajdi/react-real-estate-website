import React, { useState, useContext } from 'react';

import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { PropertyContext } from '../src/context/PropertyContext';
import { uploadImageToCloudinary } from '../src/utility/uploadimageurl';
import { Form, Button } from 'react-bootstrap';
import '../src/index.css'

const AddProperty = () => {
    const { addProperty } = useContext(PropertyContext);
    //creat obj
    const [property, setproperty] = useState({
        title: '',
        image: '',
        price: 0,
        location: ''
    });

    const [errors, seterrors] = useState({})

    const handlechange = (event) => {
        const inputfiled = event.target.name;
        const value = event.target.value;
        setproperty(prevStat => {
            return { ...prevStat, [inputfiled]: value }
        });
    };
    const handleimagechange = (event) => {
        setproperty(prevStat => {
            return { ...prevStat, image: event.target.files[0] };
        });
    };


    const validateinput = () => {
        const newErrors = {};
        if (!property.title)
            newErrors.title = 'Product name is required';
        if (property.title.length < 10)
            newErrors.title =
                'title should be at least 10 characters long';
        if (property.location.length < 10)
            newErrors.location =
                'location should be at least 10 characters long';
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
                console.log("Image URL:", imageUrl);
                const newproperty = {
                    id: nanoid(),
                    title: property.title,
                    price: property.price,
                    image: imageUrl, // استخدم رابط الصورة بدلاً من الملف
                    location: property.location,
                };

                alert(JSON.stringify(newproperty, null, 2));
                toast.success("Property created successfully!");

                addProperty(newproperty);


                // إعادة ضبط النموذج
                setproperty({
                    title: '',
                    image: '',
                    price: 0,
                    location: ''
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
        <div className="container1">
            <Form onSubmit={handlesubmit} >
                <Form.Group controlId="formTitle">
                    <Form.Label>Property Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter property title"
                        value={property.title}
                        name="title"
                        onChange={handlechange}
                        required
                    />
                    {errors.title && <span className="text-danger">{errors.title}</span>}
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter property price"
                        value={property.price}
                        name="price"
                        onChange={handlechange}
                        required
                    />
                    {errors.price && <span className="text-danger">{errors.price}</span>}
                </Form.Group>

                <Form.Group controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleimagechange}
                        required
                    />
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
                    {errors.image && <span className="text-danger">{errors.image}</span>}
                </Form.Group>

                <Form.Group controlId="formlocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter property location"
                        value={property.location}
                        name="location"
                        onChange={handlechange}
                        required
                    />
                    {errors.location && <span className="text-danger">{errors.location}</span>}
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" className="btn add-button">
                    Add
                </Button>
            </Form>
        </div>
    );
}; export default AddProperty;