import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts


        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
        // getProducts()
        //     .then(response => {
        //         setProducts(response)
        //     })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <main>
            <h1 className={classes.greeting}>{greeting}</h1>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer
