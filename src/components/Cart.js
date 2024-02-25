import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { clearAllItems } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        console.log("hey")
        dispatch(clearAllItems())
    }

    return (
        <div className="flex justify-center items-center m-auto w-6/12">
            <div className="my-20 ">
                <h3 className="m-0 text-center font-bold mb-10"> Cart Items </h3>
                {/* <div className=" mb-2"> */}
                    <button onClick = {handleClearCart} className="block mx-auto mb-2 bg-slate-300 rounded-lg p-3 text-sm ">Clear Cart</button>
                {/* </div> */}

                <CategoryItem  itemData={cartItems}/>

            </div>
        </div>
    )
}

export default Cart;