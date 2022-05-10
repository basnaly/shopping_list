import React from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { Context } from "../Context";

import ItemInShoppingList from "./ItemInShoppingList";

const styles = {
    parent: {
        backgroundImage: 'url("/img/note-1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        borderRadius: '17px',
        },
    shop: {
        fontSize: '28px',
        margin: '5px',
    },
}

const ShoppingListComponent = () => {

    const {reducerKey} = useContext(Context);

    const shoppingList = useSelector(state => state[reducerKey].shoppingList);
    
    return (
        <div className="d-flex flex-column align-items-center border shadow m-2 p-2 overflow-auto"
            style={ styles.parent }>
            <div className="d-flex flex-column align-items-center"
                style={ styles.shop }>
                Shopping list
            </div>
            <div className="d-flex flex-column me-3 overflow-auto">
                {
                    shoppingList.map((shoppingListItem, i) => (
                        <ItemInShoppingList shoppingListItem={ shoppingListItem }
                            index={ i } key={ i }/>
                    ))
                }
            </div>
        </div>

    )
}

export default ShoppingListComponent;