import { createContext, useEffect, useState } from "react";


export const LoadingContext = createContext()

export const LoadingProvider = ({children}) => {
    const [loading, setLoading]=useState(true) 
    const body = document.getElementById('body')

    useEffect(() => {
        if(loading){
            body.classList.add('body-fixed')
        } else {
            body.classList.remove('body-fixed')
        }
    }, [loading, body.classList])
    
    return (
        <LoadingContext.Provider 
          value={{loading, setLoading}}
        >
            {children}
        </LoadingContext.Provider>
    )
}