import React, { useContext } from 'react';
import { propertiesdata } from '../data';
import SingleProperty from '../../components/SingleProperty';
import { PropertyContext } from '../context/PropertyContext';
import Container from 'react-bootstrap/Container';

const PropertyList = () => {
  // Use context
  const { properties } = useContext(PropertyContext);


  return (
    <Container>
      <h1>Property List Page</h1>
      <section className="properties">
        {properties.length > 0 ? (
          properties.map((property) => (
            <SingleProperty key={property.id} property={property} />
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </section>
    </Container>
  );
};

export default PropertyList;

