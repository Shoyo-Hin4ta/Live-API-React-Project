import { useParams } from "react-router-dom";
import ResCard, {withNewLabel} from "./ResCard"; 
// import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useShowStatus";

const Body = () => {

    const [ listOfRestaurants, setListOfRestaurants ] = useState([]);

    const [ searchRestaurant, setSearchReastaurant ] = useState("");

    const [ listoffilteredRestaurants , setListOfFilteredRestaurants ] = useState([]);

    const UpdatedResCard = withNewLabel(ResCard);

    useEffect(() => {
      fetchData()
    }, [])


    const fetchData = async () => {
      
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
      const json = await data.json();
    //   console.log(data)
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    
    const onlineStatus = useShowStatus();

    if (onlineStatus === false) return <h1>Not connected to internet.</h1>

    return listOfRestaurants.length === 0 ?  (<h1>Loading..... </h1>) :
    (
        <div className="body">

            <div className="filter flex items-center">

                <div className="search m-4 p-4">
                    <input type="text" data-testid = "searchInput" className="border border-solid border-black" value={searchRestaurant} onChange={(e) => {
                        setSearchReastaurant(e.target.value);
                    }}/>

                    
                    <button className = "rounded-lg bg-green-300 m-3 px-3 py-[0.20rem] " onClick={() => {
                        //filter logic on clicking the button?
                        //what now
                        //we have the value in the searchRestaurant var
                        // console.log(searchRestaurant);
                        const filteredList2 = listOfRestaurants.filter((res) => {
                            // it will give an array
                            // if using {} remeber to use return
                            return res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase());
                        });

                        setListOfFilteredRestaurants(filteredList2);

                    }}>Search</button>
                </div>



                <button className="filter-btn rounded-lg bg-amber-300 border border-solid px-3 py-[0.20rem] " onClick={ () => {
                const filteredList = listOfRestaurants.filter((res) =>  res.info.avgRating > 4.2);
                    setListOfRestaurants(filteredList);
                }}>
                    Top-Rated Restaurant </button>
            </div>


            <div className= "flex flex-wrap justify-self-center">
                    {/* Restaurant - Card  */}

                    {/* this is when we wrote strings and passed them as props */}
                    {/* <ResCard 
                        resName = "Meghna Foods"
                        cuisine = "Indian, Biryani"/> */}

                    {/* now we have an object  */}

                    {/* <ResCard 
                    // this key which is resData goes in the component
                        resData = {restList[2]}/> */}

                    {/* dumb fuck make sure to check what you are passing in the link  */}
                    {
                        listoffilteredRestaurants.map((restaurant) => {
                            return (
                                <Link to= {"/restaurant/"+ restaurant.info.id} key = {restaurant.info.id}>

                                    { 
                                        restaurant.info.veg ? < UpdatedResCard resData = {restaurant} /> : < UpdatedResCard  resData={restaurant} />
                                    }
                                    
                                </Link>
                            )
                        })
                    }
                    
            </div>
        </div>
    );
};


export default Body;