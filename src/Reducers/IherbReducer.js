const initState = {
    
}

const IherbReducer = (state = initState, action) => {

    switch(action.type) {
        case 'ADD':
            return {
                ...state,

            }
        
        default:
            return state;
    }
}

export default IherbReducer;