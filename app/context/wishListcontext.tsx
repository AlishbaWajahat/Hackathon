"use client"
import { createContext } from "react"
type wishList = {
    [x: string]: any
}

export const WishListContext = createContext({} as wishList)