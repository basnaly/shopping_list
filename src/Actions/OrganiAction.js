import axios from 'axios';
import { env } from '../env';
import { FETCH_ORGANI_REQUEST, FETCH_ORGANI_SUCCESS, FETCH_ORGANI_FAILURE} from '../Constants/Constants';

const API_KEY = env.firebase;

export const AddItem = addItem => {
    return (dispatch) => {
        dispatch(fetchOrganiRequest())
        axios.post(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/organi.json?auth=${API_KEY}`,addItem)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchData())
            })
    }
}

export const EditItem = id => {
    return {
        type: 'EDIT_ORGANI_ITEM',
        id
    }
}

export const ChangeExistingItem = organiItemObject => {
    return (dispatch, getState) => {
        const id = getState().organiReducer.editItem;
        dispatch(fetchOrganiRequest())
        axios.put(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/organi/${ id }.json?auth=${API_KEY}`, organiItemObject)
            .then(response => {
                console.log(response)
                dispatch(EditItem(undefined)) //editing was finished
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchData())
            })
    }
}

export const DeleteItem = id => {
    return (dispatch) => {
        dispatch(fetchOrganiRequest())
        axios.delete(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/organi/${ id }.json?auth=${API_KEY}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchData())
            })
    }
}

const fetchOrganiRequest = () => {
    return {
        type: FETCH_ORGANI_REQUEST
    }
}

const fetchOrganiSuccess = data => {
    return {
        type: FETCH_ORGANI_SUCCESS,
        data
    }
}

const fetchOrganiFailure = error => {
    return {
        type: FETCH_ORGANI_FAILURE,
        error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchOrganiRequest())
        axios.get(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/organi.json?auth=${API_KEY}`)
            .then(response => {
                const organiData = response.data
                dispatch(fetchOrganiSuccess(organiData ?? {}))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchOrganiFailure(errorMessage))
            })
    }
}

export const AddToShoppingList = addShoppingItem => {
    return {
        type: 'ADD_TO_ORGANI_SHOPPING_LIST',
        addShoppingItem
    }
}

export const RemoveFromShoppingList = name => {
    return {
        type: 'REMOVE_FROM_ORGANI_SHOPPING_LIST',
        name
    }
}

export const UpdateDescriptionElement = (description, index) => {
    return {
        type: 'UPDATE_DESCRIPTION_ORGANI_ELEMENT',
        description,
        index
    }
}
