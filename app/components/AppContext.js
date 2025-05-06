"use client";
import React, { createContext, useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "../firebaseConfig";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);

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
    }, [])

    //when project on homepage is clicked, return data for clicked item
  const getReviewByName = (revName) => {
    const reviewData = reviews.find(
      (item) => item.band_name === revName
    )
    console.log("product data from context", reviewData);
    return reviewData;
  }

return (
    <AppContext.Provider
      value={{
        reviews,
        getReviewByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };