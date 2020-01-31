import React, {Component} from 'react';
import './App.css'; 
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import SerializeForm from 'form-serialize';

class CreateContact extends Component{
   handleForm = (e) => {
       e.preventDefault();
       const values = SerializeForm(e.target, {hash:true})
       if(this.props.onCreateContact) {
           this.props.onCreateContact(values)
       }
   }
    render(){
        return (
         <div>
          <Link to='/' className='close-create-contact'>
              Close
          </Link>
          <form className='create-contact-form' onSubmit={this.handleForm}>
              <ImageInput 
              className='create-contact-avatar-input'
              name='avatarURL'
              maxHeight={64}
              />
              <div className='create-contact-details'>
              <input type='text' name='name' placeholder='Name' />
              <input type='text' name='handle' placeholder='handle' />
              <button>Add Contact</button>
          </div>
          </form>
        </div>
        )
    }
}

export default CreateContact;