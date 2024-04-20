import { Description } from "app/componentes/home/Description"
import { Hero } from "app/componentes/home/Hero"
import { MainProducts } from "app/componentes/home/MainProducts"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Future World 🌟",
  description: "Welcome to the future world",
  keywords: ["ecommerce", "future", "world"]
}

export async function generateMetadata(searchParams: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products[0]
  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images:[product.image]
    }
  }
}

export default function Home() {
  
  
  return (
    <main>
       <MainProducts/>
      <h1>product</h1>

      {/* <MainProducts/> */}

      
    </main>
  )
}