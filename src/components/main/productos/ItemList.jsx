import { Item } from "./Item";
import { ItemCart } from "../carrito/ItemCart";

export const ItemList = ({ products, template }) => {
    return (
        <>
            {
                template === 'Item' ? products.map(prod => <Item product={prod} key={prod.id} />) : products.map(prod => <ItemCart product={prod} key={prod.id} />)
            }
        </>
    );
};
