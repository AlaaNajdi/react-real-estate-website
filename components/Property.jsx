//@ts-nocheck
import React from 'react'
import PropTypes from 'prop-types';

import { useState } from 'react';
import { FaOpencart } from "react-icons/fa6";
import PropertyTitle from '../components/PropertyTitle';
import PropertyPrice from '../components/PropertyPrice';
import PropertyImage from '../components/PropertyImage';
import { Card, Button, Spinner } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/index.css'


const Property = (props) => {
    const { property, onDeleteofcart, deletingId } = props;
    const { id, image, title, price, location } = property;


    return (
        <Card className="property-card mb-4">
            <PropertyImage image={image} title={title} />
            <Card.Body>
                <Card.Title>
                    <PropertyTitle title={title} />
                </Card.Title>
                <Card.Text>
                    <PropertyPrice price={price} />
                </Card.Text>
                <Card.Text>
                    Location: {location}
                </Card.Text>
                <Button variant="danger" onClick={() => onDeleteofcart(id)} disabled={deletingId === id} >
                    {deletingId === id ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        'Delete Property'
                    )}
                </Button>
                <div className="love" style={{ display: 'inline-block', marginLeft: '45px' }}>
                    <input id="switch" type="checkbox" />
                    <label className="love-heart" htmlFor="switch">
                        <i className="left"></i>
                        <i className="right"></i>
                        <i className="bottom"></i>
                        <div className="round"></div>
                    </label>
                </div>
            </Card.Body>
        </Card>
    )
}

// Property.propTypes = {
//     property: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         image: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         location: PropTypes.string,
//     }).isRequired,
//     onDeleteofcart: PropTypes.func.isRequired,
//     deletingId: PropTypes.number,
// };

export default Property;
