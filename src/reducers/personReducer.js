const people = [];

const personReducer = (state = people,action) => {
	switch(action.type){
		case "CREATE_PERSON":
			return [...state,action.payload]

		case "DELETE_PERSON":
			return state.filter((person) => person.id !== action.payload.id)

		case "EDIT_PERSON":
			return state.map((person) => {
				if(person.id === action.payload.id)
					return {...person.newPersonData,...action.payload.newPersonData}
				else
					return person
			})
			
		case "DELETE_SELECTED":
			return state.filter((person,index) => action.payload.isCheckedArray[index] !== true)

		default: return state
	}
}

export default personReducer;