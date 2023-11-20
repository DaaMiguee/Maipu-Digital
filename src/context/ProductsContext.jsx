import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const ProductsContext = React.createContext()
export const ProductsProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const [filters, setFilters] = useState({category: "auriculares-in-ear"})
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const addToCart = (product) => {
        const isProductInCart = cart.some((item) => item.id === product.id);
        if (!isProductInCart) {
            setCart([...cart, product]);
        }
    };
    const removeProduct = (pid) => {
        const updatedCart = cart.filter((item) => item.id !== pid);
        setCart(updatedCart);
    };

    useEffect(() => {
        const loadedCart = localStorage.getItem('cart');
        if (loadedCart) {
            const parsedCart = JSON.parse(loadedCart);
            if (parsedCart.length > 0) {
                setCart(parsedCart);
            }
        }
    }, [setCart]);

    useEffect(() => {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart', cartJSON);
    }, [cart]);

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "products");
        setLoading(true);

        getDocs(productCollection)
            .then((snapshot) => {
                if (snapshot.docs) {
                    setProductsData(
                        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    setLoading(false);
                }
            })
            .catch((error) => console.log(error))
            .then(() => setLoading(false));
    }, []);

    return (
        <ProductsContext.Provider value={{ productsData, setProductsData, filters, setFilters, cart, setCart, addToCart, removeProduct, loading }} >
            {children}
        </ProductsContext.Provider>
    )
}