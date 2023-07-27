import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import EndPoints from "../api/EndPoints"

const ProductList = () => {
    const [items, setItems] = useState([])
    // const cat = "men's clothing"

    const getData = () => {
        axios.get(EndPoints.PRODUCTS_URL)
            .then((response) => {
                setItems(response.data)
            })
            .catch((error) => console.log(error))
    }
    
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="row m-3">
            {
                items.map((item, index) => <ProductCard key={index} data={item} />)
            }
        </div>
    )
}

export default ProductList;