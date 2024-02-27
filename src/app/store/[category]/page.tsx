interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(porps: CategoryProps){
    const { category } = porps.params
    
    return(
        <h1>Categoria dinamica: {category} </h1>
    )
}