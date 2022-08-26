import React from 'react';
import { useProperties } from '../../context/PropertiesContext';
import PropertyCard from '../PropertyCard/PropertyCard';
import './Favourite.css';

const Favourite = () => {
  const { favouriteProperties } = useProperties();
  return (
    <div className='favourite-container'>
        <h3>Favourite Properties</h3>
        <div className="favourite-properties">
          { favouriteProperties.length === 0 ? <h2>No Favourite Properties</h2> : <PropertyCard properties={favouriteProperties} />}
        </div>
    </div>
  )
}

export default Favourite