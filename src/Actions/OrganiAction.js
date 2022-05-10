import axios from 'axios';
import { env } from '../env';
import { FETCH_ORGANI_REQUEST, FETCH_ORGANI_SUCCESS, FETCH_ORGANI_FAILURE} from '../Constants/Constants';

const API_KEY = env.firebase;

export const AddOrganiItem = addOrganiItem => {
    return (dispatch) => {
        dispatch(fetchOrganiRequest())
        axios.post(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/organi.json?auth=${API_KEY}`,addOrganiItem)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchOrgani())
            })
    }
}

export const EditOrganiItem = id => {
    return {
        type: 'EDIT_ORGANI_ITEM',
        id
    }
}

export const ChangeExistingOrganiItem = organiItemObject => {
    return (dispatch, getState) => {
        const id = getState().shufersalReducer.editShufersalItem;
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

export const fetchShufersalSuccess = shufersalData => {
    return {
        type: FETCH_SHUFERSAL_SUCCESS,
        shufersalData
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

export const AddToShoppingList = addShoppingItem => {
    return {
        type: 'ADD_TO_SHOPPING_LIST',
        addShoppingItem
    }
}

export const RemoveFromShoppingList = name => {
    return {
        type: 'REMOVE_FROM_SHOPPING_LIST',
        name
    }
}

export const UpdateDescriptionElement = (description, index) => {
    return {
        type: 'UPDATE_DESCRIPTION_ELEMENT',
        description,
        index
    }
}
