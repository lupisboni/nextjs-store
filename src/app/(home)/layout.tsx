"use client"

import { Hero } from "app/componentes/home/Hero"
import { Description } from "app/componentes/home/Description"
import { useEffect } from "react"

export default function HomeLayout({children}:{children: React.ReactNode}){
    useEffect(()=> {
        console.log('envio de metricas')
    }, [])
    return(
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    );
}