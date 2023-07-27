import axios from "axios";
import { useEffect, useState } from "react";
import EndPoints from "../api/EndPoints"
import { Link } from "react-router-dom";

const CategoryNav = () => {

    const [categories, setCategories] = useState([]);
    const getCategories = () => {
        axios.get(EndPoints.CATEGORIES_URL)
            .then((response) => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <nav className="navbar navbar-expand-lg card navbar-light">
            <ul className="text-capitalize nav nav-box">
                {
                    categories.map((category, index) =>
                        <li key={index} className="nav-item">
                            <Link className="nav-link text-dark">{category}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default CategoryNav;