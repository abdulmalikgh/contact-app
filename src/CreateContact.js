import React, {Component} from 'react';
import './App.css'; 
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';

class CreateContact extends Component{

    render(){
        return (
         <div>
          <Link to='/' className='close-create-contact'>
              Close
          </Link>
          <form className='create-contact-form'>
              <ImageInput 
              className='create-contact-avatar-input'
              name='avatarURL'
              maxHeight={64}
              />
          </form>
          <div className='create-contact-details'>
              <input type='text' name='name' placeholder='Name' />
              <input type='text' name='handle' placeholder='handle' />
              <button>Add Contact</button>
          </div>
        </div>
        )
    }
}

export default CreateContact;