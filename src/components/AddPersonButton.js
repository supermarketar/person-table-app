import React from 'react';
import {showModalActionAdd} from '../actions/modalActions.js';

function AddPersonButton(props){
	return <button onClick={() => props.showModal(showModalActionAdd())}>Add new person</button>
}

export default AddPersonButton;