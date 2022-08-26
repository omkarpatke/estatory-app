import React , { useState } from 'react';
import { useProperties } from '../../context/PropertiesContext';
import PropertyCard from '../PropertyCard/PropertyCard';
import './ProductListing.css';

const ProductListing = () => {
  const { filteredProperties, setFilteredproperties , properties } = useProperties();
  const [location, setlocation] = useState('');
  const [price, setprice] = useState('');
  const [propertyType, setpropertyType] = useState('');

  const searchHandler = (e) => {
    if(e.target.value.length >= 1){
    setFilteredproperties(pre => pre.filter(property => property.address.toLowerCase().includes(e.target.value) || property.name.includes(e.target.value)));
    }else{
      setFilteredproperties(properties);
    }
  }

  const filterHandler = () => {
    if(location && price && propertyType){
      if(location === 'All' && price === 'All' && propertyType === 'All'){
        setFilteredproperties(properties);
      }else{
        let filterItems = properties.filter(item => item.location === location && item.type === propertyType && item.rent >= price.split('-')[0] && item.rent <= price.split('-')[1]);
        if(filterItems.length >= 1){
          setFilteredproperties(filterItems);
        }else{
          alert('No Property Fount As Per Your Requirement!')
        }
      }
    }else{
      alert('Please Select All Filters!');
    }
  }
  

  return (
    <div className='productlisting-container'>
      <div className="title">
        <h2 className='heading'>Search For Rent Properties</h2>
        <input type="search" name="searchproperties" className='search-properties' id="searchproperties" placeholder='Search With SearchBar' onChange={searchHandler} />
      </div>
      <div className="filters">
        <div className="filter location-filter">
          <div className="lite-heading">Location</div>
          <div className="city-name"><select className="content" value={location} onChange={(e) => setlocation(e.target.value)}>
          <option value="All">All</option>
        <option value="mumbai">Mumbai</option>
        <option value="thane">Thane</option>
        <option value="pune">Pune</option>
      </select></div>
          </div> |
        <div className="filter when-to-move-filter">
          <div className="lite-heading">When</div>
          <div className="content">Select Move-In Date</div>
          </div> |
        <div className="filter price-filter">
          <div className="lite-heading">Price</div>
      <select className="content" value={price} onChange={(e) => setprice(e.target.value)}>
        <option value="All">All</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-15000">10000-15000</option>
        <option value="15000-20000">15000-20000</option>
        <option value="20000-50000">Greater than 20000</option>
      </select>

          </div> |
        <div className="filter type-filter">
          <div className="lite-heading">Property Type</div>
          <div className="content"><select className="content" value={propertyType} onChange={(e) => setpropertyType(e.target.value)}>
          <option value="All">All</option>
        <option value="bungalow">Bungalow</option>
        <option value="flat">Falt</option>
      </select></div>
          </div> |
        <div className="filter-btn btn signup" onClick={filterHandler}>Search</div>
      </div>
      <PropertyCard properties={filteredProperties} />
    </div>
  )
}

export default ProductListing;