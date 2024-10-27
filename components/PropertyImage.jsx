import React from 'react';

const PropertyImage = ({ image, title }) => {
  return <img src={image}
    alt={title}
    fluid="true" // تعديل هنا
    className="property-image"
  />;
};

export default PropertyImage;