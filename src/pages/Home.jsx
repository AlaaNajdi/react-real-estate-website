import React, { useState, useEffect, useContext } from 'react'
import AddProperty from '../../components/AddProperty'
import Properties from '../../components/Properties';
import { propertiesdata } from '../data';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { PropertyContext } from '../context/PropertyContext';
import '../index.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  // def properties state
  const { properties, deleteProperty } = useContext(PropertyContext);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div id="home-container">
        <h1>Home page</h1></div>
      <AddProperty />
      <br />
      {/*pass */}
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <Properties propertiesdata={properties} onDeleteofcart={deleteProperty} />)}
    </div>
  );
};


export default Home
