"use client"
import { useState, useEffect } from "react"
import { CartContext } from "./context"
import { product } from "@/types/types"

function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState<product[]>([]);
    const [total, setTotal] = useState<number>(0);
  
    // Retrieve cart and total from localStorage on the client side
    useEffect(() => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cart");
        const savedTotal = localStorage.getItem("total");
  
        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedTotal) setTotal(JSON.parse(savedTotal));
      }
    }, []);
  
    // Save cart to localStorage whenever it changes
    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }, [cart]);
  
    // Save total to localStorage whenever it changes
    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("total", JSON.stringify(total));
      }
    }, [total]);
  



    function increase(products: product) {

        let updatedCard=(cart.map((item) =>
            item.id === products.id ? { ...item, quantity: item.quantity + 1, Tcost: item.Tcost + item.cost }
                : item

        ))
        setCart(updatedCard)
        setTotal(updatedCard.reduce((prev, current) => prev + current.Tcost, 0))

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
            setTotal(updatedcart.reduce((prev, current) => prev + current.Tcost, 0))
        }

    }

 
    function add(products: product) {
        if (cart.some((item) => item.id === products.id)) {
            let updatedCart=(cart.map((item) =>
                item.id === products.id ? { ...item, quantity: item.quantity + 1, Tcost: item.Tcost + item.cost }
                    : item

            ))
            setCart(updatedCart)
            setTotal(updatedCart.reduce((prev, current) => prev + current.Tcost, 0))
            alert("quantity added")

        } else {
            let array=([...cart, { ...products, quantity: 1, Tcost: products.cost }])
            setCart(array)
            setTotal(array.reduce((prev, current) => prev + current.Tcost, 0))
            alert("product added")
        }
    }


    function del(product: product) {
            let update=(cart.filter((e) => e.id !== product.id))
            setCart(update)
            setTotal(update.reduce((prev, current) => prev + current.Tcost, 0))
        
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