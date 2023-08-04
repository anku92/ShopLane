import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartSummary = () => {

    return (

        <div className="p-4">
            <div className="row align-items-center">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body p-2">

                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="120px" className="img-fluid" alt="..." />
                                    </div>

                                    <div className="text-secondary mx-3">
                                        <div className="my-4">
                                            <strong>Brand</strong>
                                            <p style={{ fontSize: "17px" }}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        </div>
                                        <div>&nbsp;</div>
                                        <div>&nbsp;</div>
                                        <div>
                                            <p style={{ fontSize: "25px" }}>
                                                <span>&#36;</span>
                                                109
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="px-2 py-1">
                                    <Link className="text-dark" to="/" ><FaTrashAlt /></Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card mx-3">
                        <div className="card-body mx-3">

                            <ul className="text-secondary list-group ">

                                <li className="list-group-item d-flex align-items-center justify-content-between border-0 px-0 pb-0">
                                    <h5 className="text-dark font-weight-bold">Order Summary</h5>
                                </li>

                                <li className="list-group-item d-flex align-items-center justify-content-between border-0 px-0 pb-0">
                                    Subtotal
                                    <span>$ 110.0</span>
                                </li>

                                <li className="list-group-item d-flex align-items-center justify-content-between border-0 px-0 pb-0">
                                    Shipping Estimate
                                    <span>$ 5</span>
                                </li>

                                <li className="list-group-item d-flex align-items-center justify-content-between border-0 px-0 pb-0">
                                    Tax
                                    <span>$ 5</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    <h5>Order Total</h5>
                                    <span >$ 120</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartSummary;