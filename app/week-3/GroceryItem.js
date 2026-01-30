export default function Item({name, quantity, category}) {
    return (
        <li className=" bg-pink-100 border border-black p-3 m-2 rounded shadow">
            <p className="font-bold">{name}</p>
            <p>Quantity:{quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}