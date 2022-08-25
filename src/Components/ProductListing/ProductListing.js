import React from 'react';
import { useProperties } from '../../context/PropertiesContext';
import PropertyCard from '../PropertyCard/PropertyCard';
import './ProductListing.css';

const ProductListing = () => {
  const { properties } = useProperties();
  

  return (
    <div className='productlisting-container'>
      <div className="title">
        <h2 className='heading'>Search For Rent Properties</h2>
        <input type="search" name="searchproperties" className='search-properties' id="searchproperties" placeholder='Search With SearchBar' />
      </div>
      <div className="filters">
        <div className="filter location-filter">
          <div className="lite-heading">Location</div>
          <div className="city-name">Mumbai , Kandiwali West</div>
          </div> |
        <div className="filter when-to-move-filter">
          <div className="lite-heading">When</div>
          <div className="content">Select Move-In Date</div>
          </div> |
        <div className="filter price-filter">
          <div className="lite-heading">Price</div>
          <div className="content">₹10000-₹15000 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  </svg></div>
          </div> |
        <div className="filter type-filter">
          <div className="lite-heading">Property Type</div>
          <div className="content">Houses <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  </svg></div>
          </div> |
        <div className="filter-btn btn signup">Search</div>
      </div>
      <PropertyCard properties={properties} />
    </div>
  )
}

export default ProductListing;