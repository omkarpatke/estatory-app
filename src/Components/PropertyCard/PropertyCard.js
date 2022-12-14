import React from 'react';
import './PropertyCard.css';
import BatthroomImg from '../../Images/bathroom.png';
import BedImg from '../../Images/bed.png';
import areaImg from '../../Images/wide.png';
import heart from '../../Images/heart.png';
import filledHeart from '../../Images/red-heart.png';
import shine from '../../Images/shining.png';
import { useProperties } from '../../context/PropertiesContext';

const PropertyCard = ({properties}) => {
  const { favouriteProperties , setFavouriteproperties , setFilteredproperties } = useProperties();

  const addToFavourite = (property) => {
    setFilteredproperties(pre => pre.map(item => item._id === property._id ? {...property , isAddedInFavourite:true} : item));
    setFavouriteproperties([...favouriteProperties , property]);
    setFavouriteproperties(prev => prev.map( item => item._id === property._id ? {...item , isAddedInFavourite:true } : item ));
  }

  const removeFromFavourite = (property) => {
    setFilteredproperties(pre => pre.map(item => item._id === property._id ? {...property , isAddedInFavourite:false} : item));
    setFavouriteproperties(pre => pre.filter(item => item._id !== property._id));
  }


  return (
    <div className="properties-container">
        { properties && properties.map( property => (
          <div className='property-card' key={property._id}>
            <img className='property-img' src={property.img} alt={property.name} />
            {property.popular ? <span className='popular-tag'><img src={shine} color='white' alt="like-icon" width={15} /> Popular</span> : '' }
            <div className="property-details">
            <div className="property-price">₹{property.rent}/<span>month</span></div>
            <span className='heartIcon'>{ property.isAddedInFavourite ? <img src={filledHeart} alt="like-icon" width={15} onClick={() => removeFromFavourite(property)} /> : <img src={heart} onClick={() => addToFavourite(property)} alt="like-icon" width={15} /> }</span>
            <div className="property-name">{property.name}</div>
            <div className="property-address">{property.address}</div>
            <div className="property-detail">
              <div className="detail beds"><img src={BedImg} alt="bathroomImg" width={16} /> {property.bedrooms} Beds</div>
              <div className="detail bathrooms"><img src={BatthroomImg} alt="bathroomImg" width={16} /> {property.bathrooms} Bathrooms</div>
              <div className="detail sqft"><img src={areaImg} alt="bathroomImg" width={16} /> {property.area} sqft</div>
            </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default PropertyCard