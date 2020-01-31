import React, {Component} from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
class ListContacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired,
    }
    state = {
        query:''
    }
    updateQuery(query){
      this.setState( {
          query: query.trim()
      })
    }
    clearQuery = ()=>{
        this.updateQuery(' ')
    }
    render() {
        const { query } = this.state;
        const { contacts, onDeleteContact} = this.props;
        const showingContacts = query === '' ? contacts:
         contacts.filter( (c) => (
             c.name.toLowerCase().includes(query.toLocaleLowerCase())
         ))
        return (
        <div className='list-contacts'>
            <div className='list-contact-top'>
                <input  
                  className='search-contacts'
                  placeholder="Search Contacts"
                  type="text"
                  value={query}
                  onChange={(event)=>{ this.updateQuery(event.target.value)}}
                />
                <Link to='/create'>
                    Add Contact
                </Link>
            </div>
 
            {showingContacts.length !== contacts.length && (
                 <div className='showing-contacts'>
                     <span> 
                         Now showing {showingContacts.length} of {
                             contacts.length
                         }
                     </span>
                     <button onClick={this.clearQuery}>Show All </button>
                 </div>
            )}
            <ol className="contact-list">
            {showingContacts.map((contact) => (
                 <li key={contact.name} className="contact-list-item">
                     <div className="contact-avatar"
                       style={{
                           backgroundImage:`url(${contact.avatarURL})`
                       }}>
                     </div>
                     <div className="contact-details">
                         <p>{contact.name}</p>
                         <p>{contact.handle}</p>
                     </div>
                     <button className='contact-remove'
                         onClick={()=>{onDeleteContact(contact)}}>
                         remove
                     </button>
                 </li>
             ))
            }
           </ol>
        </div>

        )
    }
}

export default ListContacts;