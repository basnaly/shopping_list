import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddShufersalItem, ChangeExistingShufersalItem } from "../Actions/ShufersalAction";
import { Button, InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { CATEGORIES } from '../Constants/Constants';


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

const ShufersalItemForm = (props) => {

    let itemObject = useSelector(state => state.shufersalReducer.listItems.find(el => 
        el.id === state.shufersalReducer.editItem));
    console.log(itemObject);

    const editItem = useSelector(state => state.shufersalReducer.editItem);

    const [category, setCategory] = useState(itemObject?.category ?? 'dairy');
    const [name, setName] = useState(itemObject?.name ??'');

    const dispatch = useDispatch();

    const save = (e) => {

        e.preventDefault();

        let addedItem = {
            
            category: category,
            name: name,
        }

        if (!editItem) {
            dispatch(AddShufersalItem(addedItem));
                props.close()
            } else {
                dispatch(ChangeExistingShufersalItem(addedItem))   
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
                            CATEGORIES.map(category => (
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

export default ShufersalItemForm;