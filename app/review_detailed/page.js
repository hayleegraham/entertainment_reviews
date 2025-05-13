"use client"
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import { useSearchParams } from "next/navigation";
import { StarRating } from "../components/StarRating";

export default function ReviewDetail() {
    const { reviews, getReviewByParams } = useContext(AppContext);
    const [reviewData, setReviewData] = useState(null);

    const searchParams = useSearchParams();
    const urlBandName = searchParams.get("name");
    const urlDate = decodeURIComponent(searchParams.get("date"));

    // Replace the placeholders back to their original characters
    const bandName = urlBandName.replace(/_/g, " ");

    useEffect(() => {
        if (reviews && !reviewData) {
            const data = getReviewByParams(bandName, urlDate);
            setReviewData(data);
            //console.log("pdp data:", data);
        }
    }, [reviews]);

    return (
        <div>

            {reviewData &&
                <div>

                    {/* hero w/ video */}
                    <div className="flex flex-col bg-[#007079] w-full">
                        <div className="flex flex-col self-center text-center w-[70%] mt-8">
                            <h1 className="text-3xl text-white font-bold drop-shadow-[2px_2px_3px_rgba(0,0,0,.8)]">{reviewData.band_name}</h1>
                            <div className="text-gray-100 mt-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,.8)]">{reviewData.perf_date}</div>
                            {reviewData.video ?
                                (<div className="flex justify-center m-5">
                                    <iframe
                                        src={reviewData.video}
                                        className="object-center h-[400px] w-[710px] drop-shadow-[1px_1px_2px_rgba(0,0,0,.5)]"
                                    />
                                </div>
                                ) : (
                                    <div className="flex justify-center m-5">
                                        <Image
                                            src={reviewData.img}
                                            width={1920}
                                            height={1080}
                                            alt={reviewData.alt}
                                            className="h-[400px] w-[710px] drop-shadow-[1px_1px_2px_rgba(0,0,0,.5)]"
                                        />
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-self-center justify-center w-[40%] gap-3 m-5">
                        <div className="flex justify-start w-[40%]">
                            Performance Date: <span className="font-semibold ml-2">{reviewData.perf_date}</span>
                        </div>
                        <div className="flex justify-start w-[40%]">
                            Performance Time: <span className="font-semibold ml-2">{reviewData.perf_time}</span>
                        </div>
                        <div className="flex justify-start w-[40%]">
                            Venue: <span className="font-semibold ml-2">{reviewData.venue}</span>
                        </div>
                        <div className="flex justify-start w-[40%]">
                            Rating: <StarRating rating={reviewData.star_rating}/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-self-center w-[35%] gap-5 m-8">
                        <p>{reviewData.long_comments}</p>
                        <div className="text-sm">Reviewed by: {reviewData.reviewer}</div>
                    </div>

                </div>
            }


        </div>
    );
}
