import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputGroup, FormControl } from "react-bootstrap";
import { UpdateDescriptionElement } from '../Actions/ShufersalAction';
import ItemInShoppingList from "./ItemInShoppingList";

const styles = {
    parent: {
        backgroundImage: 'url("/img/note-1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        },
    shop: {
        fontSize: '28px',
        margin: '10px',
    },
}

const ShoppingListComponent = () => {

    const shoppingList = useSelector(state => state.shufersalReducer.shoppingList);
    
    return (
        <div className="d-flex flex-column align-items-center border shadow m-2 p-2 overflow-auto"
            style={ styles.parent }>
            <div className="d-flex flex-column align-items-center"
                style={ styles.shop }>
                Shopping list
            </div>
            <div className="d-flex flex-column mt-2 me-3">
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