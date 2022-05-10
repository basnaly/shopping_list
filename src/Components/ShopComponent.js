import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { Context } from "../Context";

import { Button } from "react-bootstrap";
import CategoryComponent from "../GeneralComponents/CategoryComponent";
import NewItemForm from "../GeneralComponents/NewItemForm";
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

    const {reducerKey, fetchData, categories} = useContext(Context);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [fetchData, dispatch])

    const [addItem, setAddItem] = useState(false);

    const items = useSelector(state => state[reducerKey].listItems);
    const editItem = useSelector(state => state[reducerKey].editItem);

    return (
        <div className="d-flex justify-content-between overflow-auto me-3">

            <div className="d-flex flex-column">
                    {addItem || editItem ?
                        <NewItemForm close={() => setAddItem(false)} />
                        :
                        <Button className="border shadow m-2"
                            style={styles.button}
                            variant={'light'}
                            onClick={() => setAddItem(true)}>
                            Add new item
                        </Button>
                    }

                <div className="d-flex flex-column overflow-auto">
                    {
                        categories.map(category => (
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