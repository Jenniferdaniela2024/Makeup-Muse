import React from 'react';
import storeItem from '../data/products.json';
import { Item } from './Item';


export const ItemList = () => {
    return (
        <div className="items-list">
            {storeItem.map((product, ) => {
                return <Item key={product.id}  {...product} />;
            })}
        </div>
    );
};

export default ItemList;
