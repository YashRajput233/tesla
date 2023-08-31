import "./Reshead.css";
import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import {CgProfile} from "react-icons/cg";
import { RxQuestionMarkCircled } from "react-icons/rx";
function Reshead() {
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("mobile_responsive")
    }
  return ( 
    <div>
    <header>
    <div className="div_logo"> 
      <img
              className="brand_name"
              src="https://img.icons8.com/?size=512&id=OinYGm0fZ470&format=png"
            />TESLA
            </div>
        <nav ref={navRef}> 
            <a href="#">Vehicles</a>
            <a href="#">Energy</a>
            <a href="#">Charging</a>
            <a href="#">Discover</a>
            <a href="#">Shop</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <div className="navlogo">
                <button className="nav-new-logo"><RxQuestionMarkCircled/></button>
                <button className="nav-new-logo"><IoGlobeOutline /></button>
                <button className="nav-new-logo"><CgProfile/></button>   
            </div>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
    </div>

  )
}

export default Reshead
