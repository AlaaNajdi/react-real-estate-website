import React, { createContext, useState } from "react";
import { propertiesdata } from "../data";



// Create context
export const PropertyContext = createContext();

// Provider component
export const PropertyProvider = ({ children }) => {
  const [properties, setproperties] = useState(propertiesdata);
  const [deletingId, setDeletingId] = useState(null);
  //handleAddProperty
  const addProperty = (newProperty) => {
    setproperties((prevProperties) => [...prevProperties, newProperty]);
  };
  //deleteofcart
  const deleteProperty = (id) => {
    setDeletingId(id); // تحديث ID العنصر الذي يتم حذفه
    setproperties((prevProperties) =>
      prevProperties.filter((property) => property.id !== id)
    );
    setTimeout(() => setDeletingId(null), 1000);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty, deleteProperty, deletingId }}>
      {children}
    </PropertyContext.Provider>
  );
};
export default PropertyContext