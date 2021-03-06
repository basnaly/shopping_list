import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Context } from "../Context";

import { Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { CATEGORIES_SHUFERSAL } from '../Constants/Constants';

const styles = {
    group: {
        borderRadius: '5px',
        
    },
    category:{
        backgroundColor: '#e9ecef',
    },
    dropdown: {
        
    },
    item: {
        border: '0px',
    },
    save: {
        fontSize: '16px',
        backgroundColor: '#e9ecef',
        color: '#212529',
        border: '0px',
    },
}

const NewItemForm = (props) => {

    const {reducerKey, AddItem, ChangeExistingItem, categories} = useContext(Context);

    let itemObject = useSelector(state => state[reducerKey].listItems.find(el => 
        el.id === state[reducerKey].editItem));
    console.log(itemObject);

    const editItem = useSelector(state => state[reducerKey].editItem);

    const [category, setCategory] = useState(itemObject?.category ?? categories[0].key);
    const [name, setName] = useState(itemObject?.name ??'');

    const dispatch = useDispatch();

    const save = (e) => {

        e.preventDefault();

        let addedItem = {
            
            category: category,
            name: name,
        }

        if (!editItem) {
            dispatch(AddItem(addedItem));
                props.close()
            } else {
                dispatch(ChangeExistingItem(addedItem))   
            }
        
        setCategory('dairy');
        setName('');

    }

    return (
            <InputGroup className="border shadow m-2 w-auto" 
                style={ styles.group }>

                <Dropdown className="mx-2"
                    onSelect={(param) => setCategory(param)}>
                    <Dropdown.Toggle variant="light"
                        id="dropdown-basic"
                        style={ styles.category }>
                        { category }
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={ styles.dropdown }>
                        {
                            categories.map(category => (
                                <Dropdown.Item eventKey={ category.key } 
                                    key={ category.key }>
                                    { category.text }
                                </Dropdown.Item>
                            ))
                        }  
                    </Dropdown.Menu>
                </Dropdown>

                <FormControl aria-label="item"
                    name="item"
                    placeholder="Enter new item"
                    value={ name }
                    type="text"
                    style={ styles.item }
                    onChange={e => setName(e.target.value)}
                />

                <Button variant="outline-secondary" id="button-addon2"
                    style={ styles.save }
                    onClick={ save }>
                    Save
                </Button>

                <Button variant="outline-secondary" id="button-addon2"
                    className="border-start border-white"
                    style={ styles.save }
                    onClick={ props.close }>
                    Cancel
                </Button>
            </InputGroup>
    )
}

export default NewItemForm;