const modal = {
	isShown: false,
	source: ""
};

const modalReducer = (state = modal,action) => {
	switch(action.type){
		case "SHOW_MODAL":
			return {...state,...action.payload}

		case "CLOSE_MODAL":
			return {...state,...action.payload}

		default: return state
	}
}

export default modalReducer;