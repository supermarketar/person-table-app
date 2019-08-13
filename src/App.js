import React from 'react';
import AddPersonButton from './components/AddPersonButton.js';
import DeleteSelectedButton from './components/DeleteSelectedButton.js';
import './components/ButtonsContainer.css'
import PersonTable from './components/PersonTable/PersonTable.js';
import {connect} from 'react-redux';
import {closeModalAction} from './actions/modalActions.js';

class App extends React.Component{

	isCheckedArray = new Array(this.props.people.length).fill(false);
	handleCheck = (index) => {
		this.isCheckedArray[index] = !this.isCheckedArray[index];
	}

	render(){
		return(
			<div>
				<div id="buttons-container">
					<AddPersonButton showModal={this.props.showModal} />
					<DeleteSelectedButton isCheckedArray={this.isCheckedArray} deleteSelected={this.props.deleteSelected} />
				</div>
				<PersonTable
					isShown={this.props.modal.isShown}
					modalSource={this.props.modal.source}
					id={this.props.modal.id}
					showModal={this.props.showModal}
					closeModal={this.props.closeModal} 
					people={this.props.people}
					createPerson={this.props.createPerson}
					deletePerson={this.props.deletePerson}
					editPerson={this.props.editPerson}
					handleCheck={this.handleCheck}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		modal: state.modalState,
		people: state.personState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: (action) => dispatch(action),
		closeModal: () => dispatch(closeModalAction()),
		createPerson: (action) => dispatch(action),
		deletePerson: (action) => dispatch(action),
		editPerson: (action) => dispatch(action),
		deleteSelected: (action) =>dispatch(action)
	}

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);