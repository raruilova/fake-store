import { useContext } from "react"
import { StoreContext } from "../context/store/StoreContext"

export const useStore = () => {
    return useContext(StoreContext);
}