
//import { ProductsWrapper } from "app/componentes/store/ProductCard"
import { getProducts } from "app/services/shopify/products"


interface CategoriesProps{
    params: {
        categories: string [],
        searchParams: string 
    }
}
export default async function Category(props: CategoriesProps){

    const products = await getProducts()

    const {categories} = props.params 
    // throw new Error('Error:BOOM!')

    return(
        <h1>Categoria dinamica:{categories}</h1>
    )
}