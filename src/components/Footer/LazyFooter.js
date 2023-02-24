import React, { Suspense } from 'react'
import useNearScreen from '../../hooks/useNearScreen'


const Footer = React.lazy(
    () => import('./Footer')
)

export default function FooterLazy() {
    const { isNearScreen, fromRef } = useNearScreen()

    return (
        <section ref={fromRef}>
            <Suspense fallback={<div>Cargando...</div>}>
                {
                    isNearScreen
                        ? <Footer />
                        : <div>Cargando...</div>
                }
            </Suspense>
        </section>
    )
}