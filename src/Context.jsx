import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Cart Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const updateItemQuantity = (itemId, newQuantity) => {
        setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)));
    };

    const clearCart = () => {
        setCart([]);
    };

    useEffect(() => {
        console.log('cart is: ')
        console.log(cart)
    }, [cart])

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                removeItemFromCart,
                updateItemQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


