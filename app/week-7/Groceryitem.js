export default function GroceryItem({ name, quantity, category }) {
    return (
        <div className="w-full border border-gray-300 rounded-lg p-4">
            <p className="text-lg font-medium text-gray-900">{name}</p>
            <p className="text-base text-gray-700">Quantity: {quantity}</p>
            <p className="text-base text-gray-700 capitalize">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
        </div>
    );
}