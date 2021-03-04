import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Form = (props) => {
    return (
        <div>
            <div className='form-group has-search' style={{backgroundColor:'black',height:'130px',padding:'10px'}}>
    <input className='form-control w-50 mt-3 ' style={{margin:'0 auto',border:'none', borderBottom:'5px solid green',backgroundColor:'white',color:'black'}} type="text" value={props.search} onChange={props.foodSearch} placeholder="Search Food Name Here"/>
    <button className="btn btn-primary " onClick={props.updateQuery} ><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>Search</button>
   <span style={{marginLeft:'30px',color:'white',fontSize:'30px'}}><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> <span> {props.cart.length} </span></span>
    </div>
        </div>
    );
};

export default Form;