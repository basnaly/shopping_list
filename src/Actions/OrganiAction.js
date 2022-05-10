import axios from 'axios';
import { env } from '../env';
import { FETCH_ORGANI_REQUEST, FETCH_ORGANI_SUCCESS, FETCH_ORGANI_FAILURE} from '../Constants/Constants';

const API_KEY = env.firebase;

export const AddOrganiItem = addItem => {
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
        const id = getState().organiReducer.editItem;
        dispatch(fetchOrganiRequest())
        axios.put(`https://learn-266e7-default-rtdb.firebaseio.com/shoping_list/organi/${ id }.json?auth=${API_KEY}`, organiItemObject)
            .then(response => {
                console.log(response)
                dispatch(EditOrganiItem(undefined)) //editing was finished
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

export const DeleteOrganiItem = id => {
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
                dispatch(fetchOrgani())
            })
    }
}

export const fetchOrganiRequest = () => {
    return {
        type: FETCH_ORGANI_REQUEST
    }
}

export const fetchOrganiSuccess = data => {
    return {
        type: FETCH_ORGANI_SUCCESS,
        data
    }
}

export const fetchOrganiFailure = error => {
    return {
        type: FETCH_ORGANI_FAILURE,
        error
    }
}

export const fetchOrgani = () => {
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

export const AddToOrganiShoppingList = addShoppingItem => {
    return {
        type: 'ADD_TO_ORGANI_SHOPPING_LIST',
        addShoppingItem
    }
}

export const RemoveFromOrganiShoppingList = name => {
    return {
        type: 'REMOVE_FROM_ORGANI_SHOPPING_LIST',
        name
    }
}

export const UpdateDescriptionOrganiElement = (description, index) => {
    return {
        type: 'UPDATE_DESCRIPTION_ORGANI_ELEMENT',
        description,
        index
    }
}
