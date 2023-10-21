import React from "react";
import { Product } from "../Product/Product";
import { productsStore } from "../store";
import { observer } from "mobx-react-lite";

export const Cart = observer(() => {
    if (!productsStore.products) {
        return null
    }

    return (
        <ul className="cart">
            {productsStore.products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </ul>
    );
})
