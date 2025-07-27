import type {Product} from "../data/products.ts"
import AddCart from "./AddCart.tsx"

export default function ProductCard({product}: {product: Product}) {
    return (<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
            {
                product.image
                    ? <img src={product.image} alt={product.name} className="h-32"/>
                    : <span className="text-6xl">{product.icon}</span>
            }
        </div>
        <div className="p-6">
            <h4 className="text-xl font-semibold text-amber-800 mb-2">{product.name}</h4>
            <p className="text-amber-600 mb-4 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-700">${product.price}</span>
                <AddCart product={product}/>
            </div>
        </div>
    </div>)
}