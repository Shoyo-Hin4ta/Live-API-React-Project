import { useDispatch } from "react-redux"
import { FOOD_ITEM_URL } from "../utils/constant"
import { addItem } from "../utils/cartSlice";

const CategoryItem = ({itemData}) => {

    // console.log(itemData[0])
    
    const dispatch = useDispatch();

    const handleAddItem= (item) => {
        //Dispatching an action

        //which reducer  function we want to dispatch
        //here we want to use addItem reducer function

        dispatch(addItem(item));

    }

    return (
        <div className="">
            {/* Category Item */}
            {
                itemData.map((item) => {
                    // console.log(item.card.info.name);
                    return (
                        <div data-testid = "foodItem" key = {item.card.info.id} className="p-4  bg-green-200 flex justify-between items-center border-b-2 border-gray-400">
                            <span>{item.card.info.name} | {"Rs."+ item.card.info.price/100}</span>
                            <div className="border-0 relative">
                                <img className= "w-32 rounded-md"src = { FOOD_ITEM_URL + item.card.info.imageId}/>
                                <button className="absolute rounded-md bottom-0 left-0 font-light text-sm p-2 bg-slate-300"
                                onClick={() => handleAddItem(item)}>ADD</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryItem;