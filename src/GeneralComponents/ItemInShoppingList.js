import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputGroup, FormControl } from "react-bootstrap";
import { UpdateDescriptionShufersalElement } from '../Actions/ShufersalAction';

const styles = {
    text: {
        backgroundColor: 'honeydew',
    },
}

const ItemInShoppingList = ({ shoppingListItem, index }) => {

    const dispatch = useDispatch();

    const updateDescriptionElement = (description) => dispatch(UpdateDescriptionShufersalElement(description, index));

    return (
        <InputGroup className="mb-2 mt-1 ps-5" key={ shoppingListItem.key }>

            <InputGroup.Text id="basic-addon1" className="w-50">
                { shoppingListItem.key }
            </InputGroup.Text>

            <FormControl
                //placeholder="Enter q-ty, description & etc."
                aria-label="description"
                aria-describedby="basic-addon1"
                style={ styles.text }
                value={ shoppingListItem.text }
                type="text"
                onChange={e => updateDescriptionElement(e.target.value)}
            />
        </InputGroup>
    )
}

export default ItemInShoppingList;