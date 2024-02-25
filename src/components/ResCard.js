import { CDN_URL } from "../utils/constant";


const ResCard = (props) => {
    //we can destructure on the fly too
    //like ResCard = {resName, cuisine} 

    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating,costForTwo, sla} = resData?.info;
    // console.log(resData);
    return (
        <div data-testid = "resCard" className="rounded-lg m-4 p-4 border border-solid bg-violet-400 w-[200px] h-[350px]">
            <img className="res-image w-[166px] h-[111px]"  
                src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold font">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    );

};

// creating higher order function

export const withNewLabel = (ResCard) => {
    return ((props) => {
        // console.log("inside with veg label")
        const { resData } = props;
        const { veg } = resData?.info;
        // console.log("ending with veg label")
        return (
            <div className="relative">
                {veg ? <label className="bg-slate-300 absolute top-0 left-40">Veg</label> : <label className="bg-slate-300 absolute top-0 left-0">Non-veg</label> }
                <ResCard {...props}/>
            </div>
        )
    })
}

export default ResCard;