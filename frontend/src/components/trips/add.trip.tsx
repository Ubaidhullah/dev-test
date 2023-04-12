import React, {useState} from 'react'
import 'materialize-css/dist/js/materialize.min.js'



const AddTripModal = () => {
    
 
  return (
    <div id='add-log-modal' className='modal' >
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
                <div className='input-field'>
                    <input type='text' name='message' />

            <label htmlFor='message' className='active'>
                Log Message
            </label>
            </div>

        </div>
        <div className='row'>
            <div className='input-field'>
                <select >
                    <option value='' disabled>
                        Select Location
                    </option>
                </select>

             </div>
             </div>   
                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input type='checkbox' className='filled-in'  />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>        
    </div>
    <div className='modal-footer'>
        <a href='#!'  className="waves-effect blue waves-light btn">Enter</a>
    </div>    
</div>
  )
  

  }


export default  AddTripModal