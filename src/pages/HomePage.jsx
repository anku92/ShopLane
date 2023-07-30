import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import ProductList from "../components/ProductList";

const MainPage = (prop) => {

    return (
        <>
            <Navbar />
            <CategoryNav />
            <ProductList />
        </>
    )
}

export default MainPage;