import { useEffect, useState } from "react";
import axios from "axios";
import EndPoints from "../api/EndPoints";
import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav"
import { useParams } from "react-router-dom";


const ProductDetailPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    const getData = () => {
        axios.get(EndPoints.PRODUCTS_URL + id)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData()
    })

    return (
        <>
            <Navbar />
            <CategoryNav />
            <div className="container">
                <div className="card card-body my-5">
                    <div className="row">
                        <div className="d-flex flex-column align-items-center col-md-6">
                            <img src={product.image} alt="..." className="img-fluid" width="250pc" />
                        </div>
                        <div className="col-md-6 px-4 d-flex flex-column justify-content-between text-left">
                            <span>
                                <h4>Brand</h4>
                                <h5>{product.title}</h5>
                            </span>

                            <hr />
                            <p><span>&#36;</span>{product.price}</p>
                            <p className="text-justify">{product.description}</p>
                            <button className="btn btn-primary align-self-start">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default ProductDetailPage;