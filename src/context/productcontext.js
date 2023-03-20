import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productsreducer"

const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false, 
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleProduct : {}
}


const AppProvider = ({ children }) => {





    const [state , dispatch] = useReducer(reducer , initialState)

    const getProduct = async (url) => {

        dispatch({type : "SET_LOADING"})

        try {
            const res = await axios.get(url)
            const products = await res.data
            // console.log(products)
             dispatch({type : "SET_API_DATA" , payload : products})
        } catch (error) {
            dispatch({type : "API_ERROR"})
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type : "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleProduct = await res.data   
            // console.log(singleProduct)
            dispatch({type : "SET_SINGLE_DATA" , payload : singleProduct})
        } catch (error) {
            dispatch({type : "SET_SINGLE_ERROR"})
        }
    }

    useEffect(() => {
        getProduct(API)
    }, [])






    return <AppContext.Provider value={{ ...state , getSingleProduct }} >
        {children}
    </AppContext.Provider>


    
    
}




// create custom hook
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }