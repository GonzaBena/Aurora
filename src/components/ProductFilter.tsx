import { useState, useEffect } from 'react';
import products, { Category } from "../data/products.ts"
import ProductCard from "./ProductCard.tsx"

export default function ProductFilter() {
    const categories = Object.values(Category);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // o un loader si querés

    return (
        <>
            <div className="bg-white py-6 sticky top-0 z-10 shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            className={`category-filter px-6 py-2 rounded-full ${
                                selectedCategory.length === 0
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-gray-200 text-amber-800'
                            }`}
                            onClick={() => setSelectedCategory([])}
                        >
                            Todos
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-filter px-6 py-2 rounded-full ${
                                    selectedCategory.includes(category)
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-gray-200 text-amber-800'
                                }`}
                                onClick={() => setSelectedCategory([category])}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    {(selectedCategory.length === 0 ? categories : selectedCategory).map((category) => {
                        const filtered = products.filter((elem) => {
                            if (typeof elem.category === 'string') {
                                return elem.category === category;
                            } else {
                                return category in elem.category;
                            }
                        });

                        return (
                            <div key={category} className="category-section" data-category={category.toLowerCase()}>
                                <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center">{category}</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                    {filtered.map((producto) => (
                                        <ProductCard key={producto.id} product={producto} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
