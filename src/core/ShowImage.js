import React from 'react';
import { API } from '../config';

const ShowImage = ({ item, url }) => (
  //The item is the product, so we get product id //style: 100% within the card
  <div className='product-img'>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='mb-3'
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
  </div>
);

export default ShowImage;
