import React from "react";
import { Product } from "../Product/Product";
import { store } from "../store";
import { observer } from "mobx-react-lite";

export const Cart = observer(() => {
    if (!store.products) {
        return null
    }

    return (
        <ul className="cart">
            {store.products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </ul>
    );
})
