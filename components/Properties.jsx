import React, { useContext } from "react";
import PropTypes from "prop-types";
import Property from "./Property";
import { Container, Row, Col } from "react-bootstrap";
import PropertyContext from "../src/context/PropertyContext";
import '../src/index.css'

const Properties = () => {
    const { properties, deleteProperty } = useContext(PropertyContext);

    return (
        <Container className="properties-grid">
            <Row className="g-2">
                {properties && properties.length > 0 ? (
                    properties.map((property) => (
                        <Col xs={12} sm={6} md={6} lg={6} key={property.id} className="mb-4">
                            <Property
                                property={property}
                                onDeleteofcart={deleteProperty}
                                key={property.id}
                            />
                        </Col>
                    ))
                ) : (
                    <p>No properties available.</p>
                )}
            </Row>
        </Container>
    );
};

// Properties.propTypes = {
//     propertiesdata: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string,
//             location: PropTypes.string,
//             price: PropTypes.number,
//         })
//     ).isRequired, 
//     onDeleteofcart: PropTypes.func.isRequired,
// };

export default Properties;
