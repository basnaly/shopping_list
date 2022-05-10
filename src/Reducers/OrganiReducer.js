import { FETCH_ORGANI_REQUEST, FETCH_ORGANI_SUCCESS, FETCH_ORGANI_FAILURE} from '../Constants/Constants';

const loadState = () => {
    try {
        const serialState = localStorage.getItem('shoppingListOrgani');
        if (serialState === null){
            return {}
        }
        return {shoppingList: JSON.parse(serialState)};
    } catch (err) {
        return {};
    }
};

const shoppingListFromLs = loadState();
console.log(shoppingListFromLs)

const initState = {
    listItems: [
        {category: 'vegetables', name: 'tomato', id: 1},
        {category: 'fruits', name: 'banana', id: 2},
        {category: 'nuts', name: 'makadamia', id: 3},
    ],
    editItem : undefined,
    loading: false,
    error: '',
    shoppingList:[],
    ...shoppingListFromLs,
}

const OrganiReducer = (state = initState, action) => {

    switch(action.type) {

        case 'ADD_TO_ORGANI_SHOPPING_LIST':
            return {
                ...state,
                shoppingList: [...state.shoppingList, action.addShoppingItem
                ]
            }

        case 'REMOVE_FROM_ORGANI_SHOPPING_LIST':
            let restShoppingList = state.shoppingList.filter(el => {
                return el.key !== action.name
            });
            return {
                ...state,
                shoppingList: restShoppingList
            }

        case 'EDIT_SHUFERSAL_ITEM':
            return {
                ...state,
                editItem: action.id
            }

        case 'UPDATE_DESCRIPTION_ELEMENT':
            let updatedShoppingList = state.shoppingList.slice()
            updatedShoppingList[action.index].text = action.description;
            return {
                ...state,
                shoppingList: updatedShoppingList
            }

        case FETCH_ORGANI_REQUEST:
            return {
                ...state,
                loading: true
            }
    
        case FETCH_ORGANI_SUCCESS:
            let loadedOrganiData = Object.keys(action.organiData).map(el =>
                ({...action.organiData[el], id: el})); // transform object to array
            return {
                ...state,
                loading: false,
                listItems: loadedOrganiData
            }
    
        case FETCH_ORGANI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}

export default OrganiReducer;