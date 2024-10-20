import React from "react";
import Property from "./Property";
import Cart from "../components/cart/Cart";

const Properties = (props) => {
    const { properties,onDeleteofcart } = props; 
    return (
        <section className="properties">
            {/* <Cart /> */}
            {properties.map((property) => (
                <Property property={property} onDeleteofcart={onDeleteofcart} key={property.id} /> 
            ))}
        </section>
    );
};

export default Properties;