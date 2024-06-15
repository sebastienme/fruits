import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Cart Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                return prevCart.map(cartItem => 
                    cartItem.id === item.id
                        ?{ ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: item.quantity }];
            }
        });
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


