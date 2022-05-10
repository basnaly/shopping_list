import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Context } from "../Context";

import { InputGroup } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { BiMessageRoundedEdit } from 'react-icons/bi';

const styles = {
    item: {
        fontSize: '16px',
        backgroundColor: 'white',
        padding: '0px 10px',
        width: '100%',
    },
    edit: {
        color: 'blue',
        backgroundColor: 'lightgray',
        fontSize: '20px',
    },
    remove: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: '20px',
    }
}

const ItemInCategory = ({item}) => {

    const {reducerKey, DeleteItem, EditItem,
        RemoveFromShoppingList, AddToShoppingList
    } = useContext(Context);

    const shoppingList = useSelector(state => state[reducerKey].shoppingList);

    const dispatch = useDispatch();

    const remove = () => dispatch(DeleteItem(item.id));

    const edit = () => dispatch(EditItem(item.id));

    const select = () => {

        const shoppingElement = {
            key: item.name, text: ''
        }

        if (isInShoppingCart) {
            dispatch(RemoveFromShoppingList(item.name))
        } else {
            dispatch(AddToShoppingList(shoppingElement));
        }
    }

    const isInShoppingCart = !!shoppingList.find(el => el.key === item.name)
    // to boolean if ! - false, if !! - true

    return (
        <InputGroup 
            className="mb-3 flex-nowrap rounded-2"
            style={ styles.input }>

            <InputGroup.Text style={ styles.edit }>
                <BiMessageRoundedEdit onClick={ edit } />
            </InputGroup.Text>

            <InputGroup.Text style={styles.item}>
                {item.name}
            </InputGroup.Text>

            <InputGroup.Checkbox aria-label="Checkbox for following text input"
                onChange={ select }
                checked={ isInShoppingCart } />

            <InputGroup.Text style={styles.remove}>
                <BsTrash onClick={ remove } />
            </InputGroup.Text>
        </InputGroup>
    )
}

export default ItemInCategory;