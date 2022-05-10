import axios from 'axios';
import { env } from '../env';
import { FETCH_SHUFERSAL_REQUEST, FETCH_SHUFERSAL_SUCCESS, FETCH_SHUFERSAL_FAILURE} from '../Constants/Constants';

const API_KEY = env.firebase;

export const AddShufersalItem = addItem => {
    return (dispatch) => {
        dispatch(fetchShufersalRequest())
        axios.post(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/shufersal.json?auth=${API_KEY}`,addItem)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchShufersal())
            })
    }
}

export const EditShufersalItem = id => {
    return {
        type: 'EDIT_SHUFERSAL_ITEM',
        id
    }
}

export const ChangeExistingShufersalItem = shufersalItemObject => {
    return (dispatch, getState) => {
        const id = getState().shufersalReducer.editItem;
        dispatch(fetchShufersalRequest())
        axios.put(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/shufersal/${ id }.json?auth=${API_KEY}`, shufersalItemObject)
            .then(response => {
                console.log(response)
                dispatch(EditShufersalItem(undefined)) //editing was finished
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchShufersal())
            })
    }
}

export const DeleteShufersalItem = id => {
    return (dispatch) => {
        dispatch(fetchShufersalRequest())
        axios.delete(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/shufersal/${ id }.json?auth=${API_KEY}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchShufersal())
            })
    }
}

export const fetchShufersalRequest = () => {
    return {
        type: FETCH_SHUFERSAL_REQUEST
    }
}

export const fetchShufersalSuccess = data => {
    return {
        type: FETCH_SHUFERSAL_SUCCESS,
        data
    }
}

export const fetchShufersalFailure = error => {
    return {
        type: FETCH_SHUFERSAL_FAILURE,
        error
    }
}

export const fetchShufersal = () => {
    return (dispatch) => {
        dispatch(fetchShufersalRequest())
        axios.get(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/shufersal.json?auth=${API_KEY}`)
            .then(response => {
                const shufersalData = response.data
                dispatch(fetchShufersalSuccess(shufersalData ?? {}))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchShufersalFailure(errorMessage))
            })
    }
}

export const AddToShufersalShoppingList = addShoppingItem => {
    return {
        type: 'ADD_TO_SHUFERSAL_SHOPPING_LIST',
        addShoppingItem
    }
}

export const RemoveFromShufersalShoppingList = name => {
    return {
        type: 'REMOVE_FROM_SHUFERSAL_SHOPPING_LIST',
        name
    }
}

export const UpdateDescriptionShufersalElement = (description, index) => {
    return {
        type: 'UPDATE_DESCRIPTION_SHUFERSAL_ELEMENT',
        description,
        index
    }
}
