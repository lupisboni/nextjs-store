
//import { ProductsWrapper } from "app/componentes/store/ProductCard"
//import { getCollections, getCollectionsProducts } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"


interface CategoriesProps{
    params: {
        categories: string [],
        searchParams: string 
    }
}
export default async function Category(props: CategoriesProps){

   

    const {categories} = props.params 
    // throw new Error('Error:BOOM!')
    let products = []
    const collections = await getCollections()
    if(categories?.length > 0) {
        const selectedCollectionId = collections.find((collection: { handle: string }) => collection.handle === categories[0]).id
        products = await getCollectionsProducts(selectedCollectionId)
    }else{
        products = await getProducts()
    }
    console.log(products)
    return(
        <h1>Categoria dinamica:{categories}</h1>
    )
}