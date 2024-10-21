import React, { useState } from 'react';

import Properties from '../components/Properties';
import { properties } from './data';
import AddProperty from '../components/AddProperty';
// import UpdateProperty from '../components/UpdateProperty';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


    export const App = () => {
    const [propertiess, setproperties] = useState(properties);
  // const [updatedata, setupdatedata] = useState(null);

    const handleaddproperty = (newproperty) => {
    setproperties((prevProperties) => {
    return [...prevProperties, newproperty];
    });
    };

    const deleteofcart = (id) => {
    const filterproperty = propertiess.filter((property) => property.id !== id);
    setproperties(filterproperty);
    };

    const handleupdateproperty = (property) => {
    setupdatedata(property);
    };

  // const updatePropertyHandler = (updatedProperty) => {
  //   setproperties((prevProperties) =>
  //     prevProperties.map((property) =>
  //       property.id === updatedProperty.id ? updatedProperty : property
  //     )
  //   );
  //   setupdatedata(null); // Clear update form after submission
  // };

  return (
    <div>
    <ToastContainer/>
    <AddProperty onhandleaddproperty={handleaddproperty} />
    {/* {updatedata && (
    <UpdateProperty
    property={updatedata}
    onUpdateProperty={updatePropertyHandler}
    />
    )} */}
    {propertiess.length > 0 ? (
    <Properties
    properties={propertiess}
    onDeleteofcart={deleteofcart}
    onhandleupdateproperty={handleupdateproperty}
    />
    ) : (
    'No properties are available'
    )}
    </div>
  );
};export default App;