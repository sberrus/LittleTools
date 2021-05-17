import React, { useEffect } from 'react'
import {withRouter} from "react-router-dom"
import Logo from "../../media/img/samdev-logo.png"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
const Index = (props) => {

    useEffect(() => {

        const menu = document.getElementById("nav_bar_toggle")
        menu.style.display = "none"

        const tl = gsap.timeline({})
        tl.from("#IndexLogo", {
            opacity: 0,
            scale: 0,
            duration: 1.5,
            ease: "circ.out",
            onComplete: ()=>{
                props.history.push("/main")
            }
        })
    }, [props.history])

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="h-25">
                <Link className="navbar-brand m-auto" to="/main">
                    <img src={Logo} alt="Samdev - Desarrollador Web" width="150" id="IndexLogo" />
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Index)
