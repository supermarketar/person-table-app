export function createPersonAction(personInputData){
	return {
		type: "CREATE_PERSON",
		payload: personInputData
	}
};
export function deletePersonAction(i){
	return {
		type: "DELETE_PERSON",
		payload: {
			index: i
		}
	}
};
export function editPersonAction(personInputData,i){
	return {
		type: "EDIT_PERSON",
		payload: {
			newPersonData: personInputData,
			index: i
		}
	}
};
export function deleteSelectedAction(isCheckedArray){
	return {
		type: "DELETE_SELECTED",
		payload: {
			isCheckedArray: isCheckedArray
		}
	}
};
