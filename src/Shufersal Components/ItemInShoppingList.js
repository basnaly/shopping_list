import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputGroup, FormControl } from "react-bootstrap";
import { UpdateDescriptionShufersalElement } from '../Actions/ShufersalAction';

const ItemInShoppingList = ({ shoppingListItem, index }) => {

    const dispatch = useDispatch();

    const updateDescriptionElement = (description) => dispatch(UpdateDescriptionShufersalElement(description, index));

    return (
        <InputGroup className="mb-3" key={ shoppingListItem.key }>

            <InputGroup.Text id="basic-addon1">
                { shoppingListItem.key }
            </InputGroup.Text>

            <FormControl
                //placeholder="Enter q-ty, description & etc."
                aria-label="description"
                aria-describedby="basic-addon1"
                value={ shoppingListItem.text }
                type="text"
                onChange={e => updateDescriptionElement(e.target.value)}
            />
        </InputGroup>
    )
}

export default ItemInShoppingList;