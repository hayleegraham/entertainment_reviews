"use client";
import React, { createContext, useState, useEffect, useRef } from "react";
import { get, ref } from "firebase/database";
import { database } from "../firebaseConfig";
import Fuse from 'fuse.js';

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

    const fuseOptions = {
      includeScore: true,
      threshold: 0.3,
      isCaseSensitive: false,
      useExtendedSearch: true,
      keys: ['band_name', 'venue', 'long_comments']
    }

    const reviewRef = ref(database, 'reviews');
    get(reviewRef).then((snapshot) => {
      console.log("snapshot", snapshot.val())
      if (snapshot.exists()) {
        const reviewArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setReviews(reviewArray);
        setDisplayedReviews(reviewArray);
        fuse.current = new Fuse(reviewArray, fuseOptions)
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

    // const searchData = reviews.map((review)=> {
    //   return review;
    // })



  }, [])

  //when project on homepage is clicked, return data for clicked item
  const getReviewByName = (revName) => {
    const reviewData = reviews.find(
      (item) => item.band_name === revName
    )
    console.log("product data from context", reviewData);
    return reviewData;
  }

  const filterByVenue = (venue) => {

    const filteredReviews = reviews.filter((review) => {
      if (venue === "") return true;
      return review.venue == venue;
    });
    setDisplayedReviews(filteredReviews);
    setSearchVal("");
    setErrorMsg("");
  }

  const filterBySearch = (searchVal) => {
    setErrorMsg("");
    setSelectedVenue("");
    const result = fuse.current.search(searchVal)
    console.log("results:", result)
    const searchResults = result.map((searchItem) => {
      return searchItem.item;
    })

    if (!result.length) {
      setErrorMsg("Oops! We didn't find anything, try searching something else!")
      setDisplayedReviews(reviews);
      return;

    }
    setDisplayedReviews(searchResults);
  }

  const resetSearch = () => {
    setSearchVal("");
    setDisplayedReviews(reviews);
    setErrorMsg("")
  }

  return (
    <AppContext.Provider
      value={{
        reviews,
        getReviewByName,
        venues,
        setSelectedVenue,
        selectedVenue,
        filterByVenue,
        setDisplayedReviews,
        displayedReviews,
        resetSearch,
        searchVal,
        setSearchVal,
        filterBySearch,
        errorMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };