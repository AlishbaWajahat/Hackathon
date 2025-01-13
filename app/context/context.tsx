"use client"
import { createContext } from "react"
 type cart={
    [x:string]:any
}

export const CartContext=createContext({} as cart)