import { useEffect, useState } from "react";
import { MENU_UPI } from "./constant";

const useRestaurantMenu = (resID) => {

    const [resMenu, setResMenu ] = useState(null);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(MENU_UPI+resID);
        const json = await data.json()

        setResMenu(json?.data);
    }

    return resMenu;
};


export default useRestaurantMenu;