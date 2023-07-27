import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
// prop from product list jsx

// const id = "1"
    const [pref, setPref] = useState(false);

    const handleFavorite = (e) => {
        setPref(prev => !prev);
    }

    const { image, title, rating, price } = props.data;

    return (
        <>

            <div className="col-sm-3 p-4">
                <div className="card px-4">
                    <div className="d-flex justify-content-end py-4" onClick={handleFavorite}>
                        {pref ? <MdFavorite size="25px" /> : <MdFavoriteBorder size="25px" />}
                    </div>
                    <img src={image} className="card-top-image grid-product_image" alt="..." />
                    <div className="card-body">
                        <Link>
                            <p style={{
                                overflow: "hidden", width: "100%", whiteSpace: "nowrap",
                                textOverflow: "ellipsis", color: "grey"
                            }} className="text-dark">
                                <strong>Brand, </strong>
                                {title}
                            </p>
                        </Link>

                        <p>
                            {rating.rate}
                            <span> &#40;{rating.count}&#41;</span>
                        </p>

                        <p>&#36; <span style={{fontSize:"18px", fontFamily:"tahoma"}}>{price}</span></p>

                        <Link to="" className="btn btn-primary btn-block">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;
