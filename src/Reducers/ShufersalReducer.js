import { FETCH_SHUFERSAL_REQUEST, FETCH_SHUFERSAL_SUCCESS, FETCH_SHUFERSAL_FAILURE} from '../Constants/Constants';

const loadState = () => {
    try {
        const serialState = localStorage.getItem('shoppingListShufersal');
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
        {category: 'dairy', name: 'milk', id: 1},
        {category: 'beverages', name: 'water', id: 2},
        {category: 'beverages', name: 'sparkling water', id: 3},
    ],
    editItem : undefined,
    loading: false,
    error: '',
    shoppingList:[],
    ...shoppingListFromLs,
}

const ShufersalReducer = (state = initState, action) => {

    switch(action.type) {

        case 'ADD_TO_SHUFERSAL_SHOPPING_LIST':
            return {
                ...state,
                shoppingList: [...state.shoppingList, action.addShoppingItem
                ]
            }

        case 'REMOVE_FROM_SHUFERSAL_SHOPPING_LIST':
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

        case 'UPDATE_DESCRIPTION_SHUFERSAL_ELEMENT':
            let updatedShoppingList = state.shoppingList.slice()
            updatedShoppingList[action.index].text = action.description;
            return {
                ...state,
                shoppingList: updatedShoppingList
            }

        case FETCH_SHUFERSAL_REQUEST:
            return {
                ...state,
                loading: true
            }
    
        case FETCH_SHUFERSAL_SUCCESS:
            let loadedData = Object.keys(action.data).map(el =>
                ({...action.data[el], id: el})); // transform object to array
            return {
                ...state,
                loading: false,
                listItems: loadedData
            }
    
        case FETCH_SHUFERSAL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}

export default ShufersalReducer;