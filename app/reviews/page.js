"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../components/AppContext";
import "./reviews.scss";
import HomeReviews from "../components/HomeReviews";

export default function Reviews() {
    const { venues, setSelectedVenue, selectedVenue, filterByVenue, displayedReviews, filterBySearch, setSearchVal, searchVal, errorMsg } = useContext(AppContext);

    //filter by category when dropdown option is selected
    const handleChange = (event) => {
        const filterValue = event.target.value;
        setSelectedVenue(filterValue);
        filterByVenue(filterValue);
    };

    const searchClicked = () => {
        console.log(searchVal)
      if (!searchVal) return;
      filterBySearch(searchVal);
    };

    return (
        <div className="flex flex-col justify-center">
            <div className="h-[380px]! w-screen bg-[#007079]">
                <div className="flex flex-col self-center z-10 text-center mt-52">
                    <div className="asset-container self-center">
                        <Image
                            className="home-svg"
                            src="/jamul-logo.svg"
                            width={103}
                            height={165}
                            alt="Jamul Logo"
                        />
                        <Image
                            className="fade-out top-0 absolute"
                            src="/jamul-logo-covered.svg"
                            width={103}
                            height={165}
                            alt="Jamul Logo Filled"
                        />
                    </div>

                    <h1 className="text-white text-4xl font-bold drop-shadow-[3px_3px_3px_rgba(0,0,0,.85)] mt-12">
                        Jamul Casino Entertainment Reviews
                    </h1>
                    <p className="text-white text-xl font-medium drop-shadow-[2px_2px_2px_rgba(0,0,0,.85)] mt-2">
                        Here you will find reviews of casino performers including videos of
                        live performances.
                    </p>
                </div>
            </div>

            <div className="flex mt-8 justify-end w-[78.5%]">
                <div className="w-[300px] mr-32">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            onChange={(e) => setSearchVal(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    searchClicked();
                                }
                            }}
                            value={searchVal}
                            type="search"
                            id="default-search"
                            className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                            placeholder="Search Reviews"
                            required
                        />
                        <button
                            onClick={searchClicked}
                            className="text-white absolute end-1.5 bottom-[0.3rem] bg-[#007079] hover:bg-[#01585e] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-md text-sm px-3 py-1"
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div>
                    <label htmlFor="categories">Filter by Venue:</label>
                    <select
                        className="mx-[10px] my-[8px] rounded py-1 pl-4 !pr-8 cursor-pointer"
                        id="venues"
                        name="venues"
                        value={selectedVenue}
                        onChange={handleChange}
                    >
                        <option value="">All Venues</option>
                        {venues?.map((venue) => (
                            <option key={venue.id} value={venue.name}>
                                {venue.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div className="flex flex-col items-center">
            {errorMsg && <div className="p-5">{errorMsg}</div>}
                <HomeReviews data={displayedReviews} contentLimit={5} header={"Reviews"} marginTop={"mt-4"} />
            </div>
        </div>
    );
}
