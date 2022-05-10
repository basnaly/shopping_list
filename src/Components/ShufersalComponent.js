import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import CategoryComponent from "../GeneralComponents/CategoryComponent";
import NewItemForm from "../GeneralComponents/NewItemForm";
import { fetchShufersal } from "../Actions/ShufersalAction";
import { CATEGORIES } from '../Constants/Constants';
import ShoppingListComponent from "../GeneralComponents/ShoppingListComponent";

const styles = {
    form: {
        fontSize: '18px',
    },
    save: {
        fontSize: '18px',
        backgroundColor: '#e9ecef',
        color: '#212529',
    },
    payment: {
        border: '1px solid #6c757d',
        fontSize: '18px',
        backgroundColor: '#e9ecef',
        color: '#212529',
    }
}

const ShufersalComponent = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShufersal())
    }, [])

    const [addShufersalItem, setAddShufersalItem] = useState(false);

    const items = useSelector(state => state.shufersalReducer.listItems);
    const editItem = useSelector(state => state.shufersalReducer.editItem);

    return (
        <div className="d-flex justify-content-between overflow-auto me-3">

            <div className="d-flex flex-column">
                    {addShufersalItem || editItem ?
                        <NewItemForm close={() => setAddShufersalItem(false)} />
                        :
                        <Button className="border shadow m-2"
                            style={styles.button}
                            variant={'light'}
                            onClick={() => setAddShufersalItem(true)}>
                            Add new item
                        </Button>
                    }

                <div className="d-flex flex-column overflow-auto">
                    {
                        CATEGORIES.map(category => (
                            <CategoryComponent key={category.key}
                                name={category.text}
                                items={items.filter(item =>
                                    item.category === category.key)} />
                        ))
                    }
                </div>

            </div>

            <ShoppingListComponent />
        </div>

    )
}

export default ShufersalComponent;