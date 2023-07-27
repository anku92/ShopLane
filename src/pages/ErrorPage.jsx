import CategoryNav from "../components/CategoryNav";
import Navbar from "../components/Navbar";

const ErrorPage = () => {

    return (
        <>
            <Navbar />
            <CategoryNav />
            <div className="container">
                <div style={{
                    backgroundColor: "whitesmoke",
                    borderRadius: "10px",
                    margin:"80px 100px 100px 80px",
                    padding: "50px",
                    border: "2px solid rgba(0, 0, 0, 0.2)"
                }}>
                    <h1>404</h1>
                    <p>PAGE NOT FOUND.</p>
                </div>
            </div>
        </>
    )
}
export default ErrorPage;