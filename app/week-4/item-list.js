import Item from "./item";
import items from "./item.json";

export default function ItemList() {
    return (
        <ul className= "space-y-3">
            {items.map((item) => (
                <Item 
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                />
            ))}
        </ul>
    );
}