import axios from "axios";
import React, { useEffect, useState } from "react";
import EndPoints from "../api/EndPoints";
import {  useParams } from "react-router-dom";
import Product from "./Product"

const CategoryProduct = () => {

    const { category } = useParams()
    const [products, setProducts] = useState([])


    const getData = () => {
        axios.get(EndPoints.PRODUCT_BY_CATEGORY_URL + category)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [category])

    return (
        <div className="row m-3">
            {
                products.map((product, index) => <Product key={index} data={product} />)
            }
        </div>
    )
}

export default CategoryProduct;