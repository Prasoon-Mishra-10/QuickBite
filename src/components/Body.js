// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
//the below code is just like a function call
import { useState, useEffect } from "react";
import { restaurantList } from "./contants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
 const filterData =  restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
 return filterData;
}

const Body = () => {

  const [allRestaurants,setallRestaurants] = useState([]);
  //searchTxt is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variable it returns = [variable name , fucntion to update the variable]

  const [filteredRestaurants,setfilteredRestaurants] = useState([]);

  //empty dependency array => once after render
  //dep array [searchText] => once after intial render + every time after render(any key is pressed in searchText)
  useEffect(() => {
    //API call
    getRestaurants();
  },[]);

  //function to fetch api
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2231255&lng=81.34544170000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //optional chaining
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
 
  //Conditional Rendering
  //if restruarent is empty => shimmer UI
  //if restruarent has data => actual data UI

  //how to avoid rendering a component
  if(!allRestaurants) return null;

  //if no restuarant is found then


  return (allRestaurants?.length === 0) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value means whatever you write in input
            setSearchText(e.target.value);
          }}
        ></input>

        {/* making the button work */}

        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText,allRestaurants);
            //update the state - restaurent
            setfilteredRestaurants(data);
            
          }}
        >
          Search{" "}
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
