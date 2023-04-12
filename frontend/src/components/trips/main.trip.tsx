import React from 'react';
import TripItem from './item.trip';


const Trip  = () => {



  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>InterCompany Transport Schedule</h4>
      </li>
      <TripItem />
    </ul>
  );
};



export default Trip;