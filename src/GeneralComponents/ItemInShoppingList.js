import React from "react";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { Context } from "../Context";

import { InputGroup, FormControl } from "react-bootstrap";

const styles = {
    text: {
        backgroundColor: 'honeydew',
    },
    item: {
        marginBottom: '10px',
    }
}

const ItemInShoppingList = ({ shoppingListItem, index }) => {

    const {UpdateDescriptionElement} = useContext(Context);

    const dispatch = useDispatch();

    const updateDescriptionElement = (description) => dispatch(UpdateDescriptionElement(description, index));

    return (
        <InputGroup className=" mt-1 ps-5" key={ shoppingListItem.key }
            style={ styles.item }>

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