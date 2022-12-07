import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productsInLocalStorage = localStorage.getItem('cart')
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : []
        } catch (error) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (product, aggregated) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id && productInCart.size === product.size
        );


        if(inCart){
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id && productInCart.size === product.size){
                        return {...inCart, quantity: inCart.quantity + aggregated}
                    } else return productInCart
                })
            )
        } else {
            setCartItems([...cartItems, {...product, quantity: aggregated}])
        }
    }

    const subtractItemInCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id && productInCart.size === product.size
            )
            
            if(inCart.quantity === 1){
                setCartItems(
                    cartItems.filter(productInCart => productInCart.id !== product.id || (productInCart.id === product.id && productInCart.size !== product.size))
                    )
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id && (productInCart.size === product.size)){
                        return{...inCart, quantity: inCart.quantity - 1}
                    } else return productInCart
                }))
            }
        }
        const deleteItemInCart = (product) => {
            const inCart = cartItems.find(
                (productInCart) => productInCart.id === product.id && productInCart.size === product.size
            )
    
            if(inCart.quantity){
                setCartItems(
                    cartItems.filter(productInCart => productInCart.id !== product.id || (productInCart.id === product.id && productInCart.size !== product.size))
                )
            }
        }
    return (
        <CartContext.Provider 
          value={{cartItems, addItemToCart, subtractItemInCart, deleteItemInCart}}
        >
            {children}
        </CartContext.Provider>
    )
}