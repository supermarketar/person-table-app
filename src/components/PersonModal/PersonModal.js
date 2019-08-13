import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function PersonModal(props){
	let defaultIme,defaultPrezime,defaultGodine,defaultVisina,defaultTezina;
	let modalTitle,modalSubmitButton,handleSubmit;
	if(props.modalSource === "add-button"){
		modalTitle = "Add new person";
		modalSubmitButton = "Add person";
		handleSubmit = props.handleSubmitAdd;
	}
	if(props.modalSource === "edit-button"){
		modalTitle = "Edit person";
		modalSubmitButton = modalTitle;
		handleSubmit = props.handleSubmitEdit;
		if(props.show === true){
			console.log(props.id);
			defaultIme = props.people[props.id].ime;
			defaultPrezime = props.people[props.id].prezime;
			defaultGodine = props.people[props.id].godine;
			defaultVisina = props.people[props.id].visina;
			defaultTezina = props.people[props.id].tezina;
		}
	}
	function renderAdditionalInputs(){
		if(props.modalSource === "add-button"){
			return(
				<div>
					<label>Profesija: </label>
					<input type="text" name="profesija"></input><br />
					<label>Skola: </label>
					<input type="text" name="skola"></input><br />
					<label>Horoskop: </label>
					<input type="text" name="horoskop"></input>
				</div>
			)
		}
		return null
	}

	return (
		<Modal
			show={props.show}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{modalTitle}
				</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit}>
				<Modal.Body>
					<label>Ime: </label>
					<input type="text" name="ime" defaultValue={defaultIme}></input><br />
					<label>Prezime: </label>
					<input type="text" name="prezime" defaultValue={defaultPrezime}></input><br />
					<label>Godine: </label>
					<input type="text" name="godine" defaultValue={defaultGodine}></input><br />
					<label>Visina: </label>
					<input type="text" name="visina" defaultValue={defaultVisina}></input><br />
					<label>Tezina: </label>
					<input type="text" name="tezina" defaultValue={defaultTezina}></input>
					{renderAdditionalInputs()}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" type="submit">{modalSubmitButton}</Button>
					<Button variant="danger" onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}

export default PersonModal;