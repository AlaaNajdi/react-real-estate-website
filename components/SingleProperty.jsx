import React, { useContext } from 'react'
import { PropertyContext } from '../src/context/PropertyContext';
import PropertyImage from './PropertyImage';

const SingleProperty = ({ property }) => {
  const { deleteProperty } = useContext(PropertyContext);
  return (
    <article key={property.id} className='property'>
      <PropertyImage image={property.image} title={property.title} />
      <h2>{property.title}</h2>
      <h2>{property.price}</h2>
      <h2>{property.location}</h2>
      <button onClick={() => deleteProperty(property.id)}>Delete</button>

    </article>)
}

export default SingleProperty
