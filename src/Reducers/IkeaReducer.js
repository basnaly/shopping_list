const initState = {
    
}

const IkeaReducer = (state = initState, action) => {

    switch(action.type) {
        case 'ADD':
            return {
                ...state,

            }
        
        default:
            return state;
    }
}

export default IkeaReducer;