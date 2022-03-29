import "./CartProducts.css";
import CartProduct from "./CartProduct"

const products = [
    { id: 1, name: "Apple Iphone 11 pro max", image: "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-oneplus-8pro.png?alt=media&token=5ebee44a-2fdf-403f-8583-509deee151c5", price: 20, qty: 3, totalQty: 5 },
    { id: 2, name: "One plus 8", image: "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-oneplus-8pro.png?alt=media&token=5ebee44a-2fdf-403f-8583-509deee151c5", price: 15, qty: 1, totalQty: 2 },
    { id: 3, name: "Adidas Short 1", image: "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-oneplus-8pro.png?alt=media&token=5ebee44a-2fdf-403f-8583-509deee151c5", price: 30, qty: 7, totalQty: 12 },
    { id: 4, name: "Samsung charger Type C", image: "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-oneplus-8pro.png?alt=media&token=5ebee44a-2fdf-403f-8583-509deee151c5", price: 99, qty: 2, totalQty: 7 }
]

const cart = { id: 1, products }

const CartProducts = () => {
    return (
        <div className="cart-products">
            {cart.products.map((product) => (
                <CartProduct key={product.id} {...product} />
            ))}
        </div>
    )
}

export default CartProducts