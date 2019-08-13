import React from 'react';
import './PersonTable.css';
import Button from 'react-bootstrap/Button';
import PersonModal from '../PersonModal/PersonModal.js';
import {showModalActionEdit} from '../../actions/modalActions.js';
import {createPersonAction,deletePersonAction,editPersonAction} from '../../actions/personActions.js';
import {Link} from 'react-router-dom';

let id = 0;
function PersonTable(props){
	
	function deletePerson(id){
		props.deletePerson(deletePersonAction(id));
	}
	function getAdditionalPersonInputData(event){
		if(props.modalSource === "add-button"){
			return {
				id: id++,
				profesija: event.target.profesija.value,
				skola: event.target.skola.value,
				horoskop: event.target.horoskop.value
			}
		}
	}
	function getPersonInputData(event){
		return {
			id: props.id,
			ime: event.target.ime.value,
			prezime: event.target.prezime.value,
			godine: event.target.godine.value,
			visina: event.target.visina.value,
			tezina: event.target.tezina.value,
			...getAdditionalPersonInputData(event)
		}
	}
	function handleSubmitAdd(event){
		event.preventDefault();
		props.createPerson(createPersonAction(getPersonInputData(event)));
		props.closeModal();
	}
	function handleSubmitEdit(event){
		event.preventDefault();
		props.editPerson(editPersonAction(getPersonInputData(event),props.id));
		props.closeModal();
	}

	return (
		<div>
			<PersonModal
				show={props.isShown}
				onHide={props.closeModal}
				modalSource={props.modalSource}
				id={props.id}
				people={props.people}
				handleSubmitAdd={handleSubmitAdd}
				handleSubmitEdit={handleSubmitEdit}
			/>
			<table>
				<tbody>
					<tr>
						<th>Ime</th>
						<th>Prezime</th>
						<th>Godine</th>
						<th>Visina</th>
						<th>Tezina</th>
						<th>Edit/Delete</th>
						<th>Selected</th>
					</tr>
					{props.people.map((person,index) => (
						<tr key={index}>
							<td>{person.ime}</td>
							<td>{person.prezime}</td>
							<td>{person.godine}</td>
							<td>{person.visina}</td>
							<td>{person.tezina}</td>
							<td>
								<Button variant="danger" onClick={() => deletePerson(person.id)}>Delete</Button>
								<Button variant="info" onClick={() => props.showModal(showModalActionEdit(person.id))}>Edit</Button>
								<Link to={"user/"+person.id} id="view-details-button">View details</Link>
							</td>
							<td id="center-align">
								<input type="checkbox" onChange={() => props.handleCheck(index)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default PersonTable;