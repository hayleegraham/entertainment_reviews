"use client";
import React, { createContext, useState, useEffect, useRef } from "react";
import { get, ref } from "firebase/database";
import { database } from "../firebaseConfig";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);
    const [venues, setVenues] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [selectedVenue, setSelectedVenue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [displayedReviews, setDisplayedReviews] = useState([]);
    const fuse = useRef();

    useEffect(() => {
        const reviewRef = ref(database, 'reviews');
        get(reviewRef).then((snapshot) => {
            console.log(snapshot.val())
            if (snapshot.exists()) {
                const reviewArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                        ...data,
                }));
                setReviews(reviewArray);
            } else {
                console.log("No Data")
            }
        })
        .catch((error) => {
            console.error(error)
        })

        const venueRef = ref(database, 'venues');
        get(venueRef).then((snapshot) => {
            console.log("venues: ", snapshot.val())
            if (snapshot.exists()) {
                const venueArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                        ...data,
                }));
                setVenues(venueArray);
            } else {
                console.log("No Data")
            }
        })
        .catch((error) => {
            console.error(error)
        })
        // const dataWithCategories = jsonData.products.items.map((product)=> {
        //   const foundCatName = jsonData.categories.filter((category) => {
        //     return category.cat_id == product.cat_id
        //   })
        //   let catName = foundCatName[0].cat_name == "Veggies" ? "Veggies Vegetables" : foundCatName[0].cat_name
        //   product.cat_name = catName;
        //   return product;
        // })
        // const options = {
        //   includeScore: true,
        //   threshold: 0.4,
        //   keys: ['name', 'brand', 'variety', 'cat_name']
        // }
        // fuse.current = new Fuse(dataWithCategories, options)

    }, [])

    //when project on homepage is clicked, return data for clicked item
  const getReviewByName = (revName) => {
    const reviewData = reviews.find(
      (item) => item.band_name === revName
    )
    console.log("product data from context", reviewData);
    return reviewData;
  }

  // const filterByCategory = (category) => {
  //   const filteredSeeds = data.products.items.filter((item) => {
  //     if (category === "") return true;
  //     return item.cat_id == category;
  //   });
  //   setDisplayedReviews(filteredSeeds);
  //   setSearchVal("");
  //   setErrorMsg("");
  // }

  // const filterBySearch = (searchVal) => {
  //   setErrorMsg("");
  //   setSelectedVenue("");
  //   const result = fuse.current.search(searchVal)
  //   const searchResults = result.map((searchItem) => {
  //     return searchItem.item;
  //   })
  //   if(!result.length) {
  //     setErrorMsg("Oops! We didn't find anything, but have a look at our Best Sellers!")
  //     return setDisplayedReviews(data.bestSellers.items)
      
  //   }
  //   setDisplayedReviews(searchResults);
  // }

return (
    <AppContext.Provider
      value={{
        reviews,
        getReviewByName,
        venues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };