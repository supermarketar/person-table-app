import React from 'react';
import {deleteSelectedAction} from '../actions/personActions.js';

function DeleteSelectedButton(props){
	function deleteSelected(){
		props.deleteSelected(deleteSelectedAction(props.isCheckedArray))
	}

	return <button onClick={deleteSelected}>Delete selected</button>
}

export default DeleteSelectedButton;