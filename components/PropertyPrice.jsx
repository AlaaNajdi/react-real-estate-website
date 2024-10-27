import React from 'react';

const PropertyPrice = ({ price }) => {
  return (
    <span>Price: {price}</span> // استخدم <span> بدلاً من <div>
  );
};

export default PropertyPrice;