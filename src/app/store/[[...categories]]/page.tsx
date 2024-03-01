interface CategoryProps{
    params: {
        categories: string [],
        seachParams?: string 
    }
}

export default function Category(props: CategoryProps){
console.log(props)

    const { categories } = props.params 

console.log(categories)

    return(
        <h1> Categoria dinamica: {categories} </h1>
    )
}