import type {Product} from "../data/products.ts"

export default function AddCart({product}: {product: Product}) {
    return <button
        className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors add-to-cart text-sm"
        data-product={JSON.stringify(product)}
        onClick={(e) => {
            // @ts-ignore
            const productData = JSON.parse(e.target.getAttribute('data-product'));

            // Obtener carrito actual del localStorage
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');

            // Buscar si el producto ya existe
            const existingProductIndex = cart.findIndex((item: Product) => item.id === productData.id);

            if (existingProductIndex !== -1) {
                // Si existe, incrementar cantidad
                cart[existingProductIndex].quantity += 1;
            } else {
                // Si no existe, agregar nuevo producto
                cart.push({ ...productData, quantity: 1 });
            }

            // Guardar en localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Disparar evento para actualizar contador
            window.dispatchEvent(new CustomEvent('cartUpdated'));

            // Mostrar feedback visual
            // @ts-ignore
            const originalText = e.target.textContent;
            // @ts-ignore
            e.target.textContent = '¡Agregado!';
            // @ts-ignore
            e.target.style.backgroundColor = '#10b981';

            setTimeout(() => {
                // @ts-ignore
                e.target.textContent = originalText;
                // @ts-ignore
                e.target.style.backgroundColor = '';
            }, 1500);
        }}
    >
        Agregar al Carrito
    </button>
}