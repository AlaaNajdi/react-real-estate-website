import React, { useState } from 'react';

const UpdateProperty = ({ property, onUpdateProperty }) => {
  const [title, setTitle] = useState(property?.title || '');
  const [imageurl, setImageurl] = useState(property?.imageurl || '');
  const [price, setPrice] = useState(property?.price || 0);
  const [description, setDescription] = useState(property?.description || '');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageurlChange = (event) => {
    setImageurl(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProperty = {
      ...property,
      title: title,
      price: price,
      imageurl: imageurl,
      description: description,
    };

    onUpdateProperty(updatedProperty);

    // Optionally reset fields after update
    setTitle('');
    setPrice(0);
    setImageurl('');
    setDescription('');
  };

  return (
    <div>
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Update Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Update Price: </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="image">Update Image URL: </label>
          <input
            type="text"
            id="image"
            value={imageurl}
            onChange={handleImageurlChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Update Description: </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProperty;
