import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofiles } from "../content_option";

const Footermain = () => {
    return (
        <>
            <footer class="position-sticky flex-shrink-0 py-4 border border-dark bg-black text-white-50">
                <div class="container text-center">
                <Link to="/contact">
                    Contact Me
                </Link>
                </div>
            </footer>
        </>
    )
}

export default Footermain