import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";



const ResMenu = () => {
    // since we are getting the details from this api call, we need a variable that will be dynamic to store the object


    // const [resItems, setResItems ] = useState(null);

    //resID has our unique restauraunt id which we 
    //are linking it in the body when it is clicked the
    //that path is called with the resid



    //here we want the child to change the state of the parent.
    const [expandIndex, setExpandIndex] = useState(false);

    const { resID } = useParams();

    //need to use api call to get that particular restaurant info
    // to use api call we need to use useEffect 

    // which we have transferred in our custom hook :D

    const resItems = useRestaurantMenu(resID);

    console.log(resItems)
    
    if ( resItems === null ) return <h1>Loading</h1>;

    // names are printing, time to get the menu
    const { name, cuisines, avgRating, costForTwoMessage } = resItems.cards[2].card.card.info;

    // items cards are array of objects
    const { itemCards } = resItems.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    // console.log(itemCards);
    // console.log(itemCards[0].card.info.name);


    const allCategories = resItems.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

    const menuCategories = allCategories.filter((category) => {
        return category.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    
    // console.log(menuCategories)

    return (
        <div className="flex justify-center">
            <div className="my-20 rounded-lg w-6/12 bg-green-50">
                <h1 className="text-center font-bold text-2xl my-8">{name}</h1>
                <p className="text-center">{cuisines.join(", ")} &nbsp;&nbsp; {costForTwoMessage}</p>
                <p className="text-center">{"Average Rating - " +avgRating +" ⭐️"}</p>
                <br />
                {
                    menuCategories.map((category, index) => {
                        // console.log(category)
                        return (
                            <ResCategory key={category?.card?.card?.title} categoryDataWithItems = {category?.card?.card} 
                            showItems = {expandIndex === index ? true : false}
                            setExpandIndex = {()=>setExpandIndex(index)}/>
                        )
                    })

                    // <ResCategory />
                }


            </div>
        </div>
    )
}

export default ResMenu;










// <ul>
//                 { itemCards.map((item) => (

//                     <li key={item.card.info.id}>
//                         {item.card.info.name}
//                     </li>
                    
//                     ))
//                 }
//                 {/* <li>{itemCards[0].card.info.name}</li>
//                 <li>{itemCards[1].card.info.name}</li>
//                 <li>{itemCards[2].card.info.name}</li> */}
//             </ul>