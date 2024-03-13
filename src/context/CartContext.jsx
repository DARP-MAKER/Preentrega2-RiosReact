import React, {createContext, useState} from 'react'

export const CartContext = createContext()
 
const CartProvider = ({children}) => {

    const [cart,setCart] = useState ([])

    const addCart = (product,count) => {

        const productExist = cart.findIndex(prod => prod.product.id == product.id)

            if (productExist == -1) { 
                setCart([...cart,{product,count}])
            }

            else { 
            const newCart = [...cart]
            newCart[productExist].count += count
            setCart(newCart)
        }

            
    }
    
    const deleteCart = (productId) => {
            const newCart = cart.filter(item => item.product.id !== productId)
            setCart(newCart)
        
    }

    const emptyCart = () => {
        setCart([])
        
    }

    const quantityCart = () => {
        const totalQuantity = cart.reduce((total,item) => total + item.count,0)
        return totalQuantity
        
    }

    const totalCart = () => {
        const totalPrice = cart.reduce ((total,item) => total + (item.product.price * item.count), 0)
        
    }

    console.log (cart)

    return (

        <CartContext.Provider value ={{
            cart,
            addCart,
            deleteCart,
            emptyCart,
            quantityCart,
            totalCart
            
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;