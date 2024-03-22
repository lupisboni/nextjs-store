import { Hero } from "app/componentes/home/Hero";
import { Description } from "app/componentes/home/Description";
import { ReactNode } from "react";
export default function HomeLayout({children}: {children: ReactNode}) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    );
}