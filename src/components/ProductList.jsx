import axios from "axios";
import { useEffect, useState } from "react";
import EndPoints from "../api/EndPoints";
import Product from "./Product"

const Products = () => {
    const [products, setProducts] = useState([]);
    const getData = () => {
        axios.get(EndPoints.PRODUCTS_URL)
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="row m-3">
            {
                products.map((product, index) => <Product key={index} data={product} />)
            }
        </div>
    )
}

export default Products;