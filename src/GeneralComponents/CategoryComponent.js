import React from "react";

import ItemInCategory from "./ItemInCategory";

const styles = {
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
}

const CategoryComponent = (props) => {

    return (
        <div className="d-flex flex-column border shadow m-2">
            <div className="d-flex align-self-center p-3"
                style={styles.title}>
                {props.name}
            </div>

            <div className="d-flex flex-column px-2">
                {
                    props.items.map(item =>
                        <ItemInCategory item={ item } key={ item.id }/>
                    )
                }
            </div>
        </div>
    )
}

export default CategoryComponent;