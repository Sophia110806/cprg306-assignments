export default function Item ({name, quantity, category}) {

return(
        <li className=" bg-pink-100 border border-black p-3 m-2 rounded shadow">
            <div className="semi-bold">{name}</div>
            <div>Quantity: {quantity}</div>
            <div>{category}</div>
        </li>

);
} 