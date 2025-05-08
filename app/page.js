"use client"
import React, { useContext, useEffect } from "react";
import { AppContext } from "./components/AppContext";
import HomeHero from "./components/HomeHero";
import HomeReviews from "./components/HomeReviews";


export default function Home() {
  const { reviews, resetSearch, displayedReviews } = useContext(AppContext);

  useEffect(() => {
    if(reviews){
      resetSearch()
    }
    
  }, [reviews]);

  return (
    <div>
        <HomeHero />
        <HomeReviews data={displayedReviews} contentLimit={3} header={"Recent Reviews"} marginTop={"mt-16"}/>
    </div>
  );
}
