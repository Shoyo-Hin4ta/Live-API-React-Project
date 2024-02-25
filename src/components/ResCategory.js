import { useState } from "react";
import CategoryItem from "./CategoryItem";

const ResCategory = (props) => {

    // const [showItems, setShowItems] = useState(false);

    // console.log(props)
    const { categoryDataWithItems, showItems, setExpandIndex} = props;
    const { title, itemCards } = categoryDataWithItems;
    
    // console.log(title)


    const handleClick = () => {
        setExpandIndex();
    }

    return (

        <div className="border-0 my-2" >

            <div onClick = {handleClick} className= "p-2 bg-green-300 title flex justify-between">
                <span className="font-bold"> 
                    {title}
                    {/* Title */}
                </span>
                <span>⬇</span>
            </div>
            {showItems && <CategoryItem itemData = {itemCards} />}


        </div>

    )
    
};


export default ResCategory;

