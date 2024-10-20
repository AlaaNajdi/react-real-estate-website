import React, { useState } from "react";
import Properties from "../components/Properties";
import { properties } from './data';
import Counter from "../components/Counter";
import Cart from "../components/cart/Cart";
import AddPropery from "../components/AddPropery";


export const App = () => {
    const[propertiess,setproperties]=useState(properties);
    //1- creat fun
const handleaddproperty = (newproperty)=>{
setproperties((prevProperties)=>{
    return[...prevProperties,newproperty];
});
};

const deleteofcart=(id)=>{
    const filterproperty=propertiess.filter(property=>property.id!==id);
    setproperties(filterproperty);
}


    //2- pass the fun as props
    return (
        <div>
            <AddPropery onhandleaddproperty={handleaddproperty}/>
            {/* <Counter/> */}
            {/* <Cart/> */}
            {properties.length > 0 ? (
                <Properties properties={propertiess} onDeleteofcart={deleteofcart}/>
            ) : (
                'no properties are available'
            )}
        </div>
    );
}

export default App;