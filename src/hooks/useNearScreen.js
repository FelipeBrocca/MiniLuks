import {useEffect, useState, useRef} from 'react'

export default function useNearScreen(){
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(function(){

        let observer

        const onChange = (entries, observer) => {
           const element = entries[0]
           if(element.isIntersecting){
            setIsNearScreen(true)
            observer.disconnect()
           }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import ('intersection-observer')
        ).then(() => {
            
            observer = new IntersectionObserver(onChange, {
                rootMargin: '50px'
            })
    
            observer.observe(fromRef.current)
        })


        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}