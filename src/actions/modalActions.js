export function closeModalAction(){
	return {
		type: "CLOSE_MODAL",
		payload: {
			isShown: false
		}
	}
};
export function showModalActionAdd(i){
	return {
		type: "SHOW_MODAL",
		payload: {
			isShown: true,
			source: "add-button",
		}
	}
};
export function showModalActionEdit(i){
	return {
		type: "SHOW_MODAL",
		payload: {
			isShown: true,
			source: "edit-button",
			index: i
		}
	}
}