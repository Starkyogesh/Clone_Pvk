import React, { createContext, useState } from 'react';

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCarts = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.SortPrice * item.quantity, 0);
    };

    const calculateRealTotal = () => {
        return cart.reduce((total, item) => total + item.SortRealPrice * item.quantity, 0);
    }

    const calculateDiscount = () => {
        return cart.reduce((total, item) => total + item.SortRealPrice * item.quantity - item.SortPrice * item.quantity, 0);
    }

    const addToWishlist = (product) => setWishlist([...wishlist, product]);
    const removeFromWishlist = (productId) => setWishlist(wishlist.filter(item => item.id !== productId));

    return (
        <ShoppingContext.Provider 
            value={{ 
                cart, 
                wishlist, 
                addToCarts, 
                removeFromCart, 
                addToWishlist, 
                removeFromWishlist, 
                increaseQuantity,
                decreaseQuantity,
                calculateTotal,
                calculateRealTotal,
                calculateDiscount
            }}>
            {children}
        </ShoppingContext.Provider>
    );
};