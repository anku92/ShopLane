import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-light px-5">

            <div className="right-sec">
                <Link to="/" className="navbar-brand" style={{ fontSize: "35px" }}>
                    <span style={{ color: "#00B0F0" }}>SHOP</span>
                    LANE
                </Link>
            </div>

            <div className="left-sec d-flex align-items-center">

                <div className="dropdown">
                    <div className="d-flex align-items-center px-3 py-2">
                        <MdOutlineAccountCircle className="account-icon" size="55px" />

                        <button className="dropbtn text-left">
                            Login <br /><span className="text-secondary">or Sign Up</span>
                        </button>
                        <SlArrowDown className="account-icon" size="25px" />

                    </div>
                    <div className="dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>

                <div>
                    <Link className="text-dark cart-link" to="/cart">
                        <BsCart3 className="cart-icon" />
                        <span className="cart-total-item">10</span>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;