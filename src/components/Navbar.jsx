import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {

    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) {
            setLoginStatus(false);
        } else {
            setLoginStatus(true);
        }
    }, [loginStatus]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setLoginStatus(false);
    };

    const curUser = JSON.parse(localStorage.getItem("user"))

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
                        <MdOutlineAccountCircle className="account-icon" size="45px" />

                        {
                            loginStatus ? (
                                <button className="dropbtn text-left">
                                    Welcome, <br /><span className="text-primary font-weight-bold">{curUser.username}</span>
                                </button>
                            ) : (
                                <button className="dropbtn text-left">
                                    Login <br /><span className="text-secondary">or Sign Up</span>
                                </button>
                            )
                        }

                        <SlArrowDown className="account-icon" size="20px" />

                    </div>
                    <div className="dropdown-content">
                        {
                            loginStatus ? (
                                <div>
                                    <Link className="text-danger" onClick={onLogoutHandler}>Logout</Link>
                                    <Link to="/">Favorite</Link>
                                </div>

                            ) : (
                                <div>
                                    <Link to="/login">Login</Link>
                                    <Link to="/signup">Sign Up</Link>
                                    <Link>Favorite</Link>
                                </div>

                            )
                        }
                    </div>
                </div>

                <div>
                    <Link className="text-dark cart-link" to="/cart">
                        <BsCart3 className="cart-icon" />
                        <span className="cart-total-item">!</span>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;