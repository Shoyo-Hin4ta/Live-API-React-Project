import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useShowStatus";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useShowStatus();

    //this store.cart.items here the cart is the property of our
    //appStore reducer object

    //Store is our appStore (entire redux Store)

    //subscribed to our store
    const cart = useSelector((store) => store.cart.items);
    // console.log(cart);

    return (
        <div className = "flex justify-between bg-blue-300 shadow-md  border-orange-700">
            <div className= "logo-container">
                    <img className = "w-52" src ={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="m-3">Online Status : {onlineStatus ? "✅" : "🔴"} </li>
                    <li className="m-3"> < Link to = "/">Home </Link></li>
                    <li className="m-3"> <Link to = "/aboutus">About Us </Link></li>
                    <li className="m-3"><Link to = "/contact"> Contact Us </Link></li>
                    <li className="m-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-3 font-bold"><Link to="/cart">Cart({cart.length})</Link></li>
                    <li className="m-3"><button onClick = { () => {
                         btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    } } className="login">{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;