import React from 'react';
import './ViewDetails.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {editPersonAction} from '../../actions/personActions.js';

class ViewDetails extends React.Component{
	personIndex = this.props.match.params.id;
	person = this.props.people[this.personIndex];

	defaultIme = this.person.ime;
	defaultPrezime = this.person.prezime;
	defaultGodine = this.person.godine;
	defaultVisina = this.person.visina;
	defaultTezina = this.person.tezina;
	defaultProfesija = this.person.profesija;
	defaultSkola = this.person.skola;
	defaultHoroskop = this.person.horoskop;

	getPersonInputData = (event) => {
		return {
			ime: event.target.ime.value,
			prezime: event.target.prezime.value,
			godine: event.target.godine.value,
			visina: event.target.visina.value,
			tezina: event.target.tezina.value,
			profesija: event.target.profesija.value,
			skola: event.target.skola.value,
			horoskop: event.target.horoskop.value
		}
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.editPerson(editPersonAction(this.getPersonInputData(event),Number(this.personIndex)));
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Ime: </label>
				<input type="text" name="ime" defaultValue={this.defaultIme}></input><br />
				<label>Prezime: </label>
				<input type="text" name="prezime" defaultValue={this.defaultPrezime}></input><br />
				<label>Godine: </label>
				<input type="text" name="godine" defaultValue={this.defaultGodine}></input><br />
				<label>Visina: </label>
				<input type="text" name="visina" defaultValue={this.defaultVisina}></input><br />
				<label>Tezina: </label>
				<input type="text" name="tezina" defaultValue={this.defaultTezina}></input><br />
				<label>Profesija: </label>
				<input type="text" name="profesija" defaultValue={this.defaultProfesija}></input><br />
				<label>Skola: </label>
				<input type="text" name="skola" defaultValue={this.defaultSkola}></input><br />
				<label>Horoskop: </label>
				<input type="text" name="horoskop" defaultValue={this.defaultHoroskop}></input><br />
				<Link id="back-link" to="/">Back</Link>
				<input id="submit-button" type="submit" value="Edit person" />
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.personState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		editPerson: (action) => dispatch(action)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(ViewDetails);