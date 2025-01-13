"use client"
import { useState, useEffect } from "react"
import { CartContext } from "./context"
import { product } from "@/types/types"

function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<product[]>(() => {
        // Retrieve cart from localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("items added into local")
    }, [cart]);

    // create a total state

    const [total, settotal] = useState<number>(() => {
        const savedTotal = localStorage.getItem("total");
        return savedTotal ? JSON.parse(savedTotal) : 0
    })
    useEffect(() => {
        localStorage.setItem("total", JSON.stringify(total))
    }, [total])



    function increase(products: product) {

        let updatedCard=(cart.map((item) =>
            item.id === products.id ? { ...item, quantity: item.quantity + 1, Tcost: item.Tcost + item.cost }
                : item

        ))
        setCart(updatedCard)
        settotal(updatedCard.reduce((prev, current) => prev + current.Tcost, 0))

    }
    function decrease(products: product) {
        if (products.quantity <= 1) {
            del(products)

        } else {
            let updatedcart=(cart.map((item) =>
                item.id === products.id ? { ...item, quantity: item.quantity - 1, Tcost: item.Tcost - item.cost }
                    : item

            ))
            setCart(updatedcart)
            settotal(updatedcart.reduce((prev, current) => prev + current.Tcost, 0))
        }

    }

 
    function add(products: product) {
        if (cart.some((item) => item.id === products.id)) {
            let updatedCart=(cart.map((item) =>
                item.id === products.id ? { ...item, quantity: item.quantity + 1, Tcost: item.Tcost + item.cost }
                    : item

            ))
            setCart(updatedCart)
            settotal(updatedCart.reduce((prev, current) => prev + current.Tcost, 0))
            alert("quantity added")

        } else {
            let array=([...cart, { ...products, quantity: 1, Tcost: products.cost }])
            setCart(array)
            settotal(array.reduce((prev, current) => prev + current.Tcost, 0))
            alert("product added")
        }
    }


    function del(product: product) {
            let update=(cart.filter((e) => e.id !== product.id))
            setCart(update)
            settotal(update.reduce((prev, current) => prev + current.Tcost, 0))
        
    }
    
    return (
        <>
            <CartContext.Provider value={{ cart, add, del, increase, decrease,total }}>
                {children}
            </CartContext.Provider>
        </>
    )

}
export default CartProvider