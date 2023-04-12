import React from 'react';



const TripItem = () => {


  return (
    <li className='collection-item'>
      <div>
        <a>
          href='#edit-log-modal' 
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #</span> last updated by{' '}
          <span className='black-text'></span> on{' '}
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};



export default TripItem;