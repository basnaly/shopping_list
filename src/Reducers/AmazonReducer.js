const initState = {
    
}

const AmazonReducer = (state = initState, action) => {

    switch(action.type) {
        case 'ADD':
            return {
                ...state,

            }
        
        default:
            return state;
    }
}

export default AmazonReducer;