"use client"
import { createContext } from "react"
 type cartt={
    [x:string]:any
}

export const CartContext=createContext({} as cartt)