"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const HomeReviews = ({ contentLimit, header }) => {
    const { reviews } = useContext(AppContext);
    
    return (

        <div className="flex flex-col justify-self-center w-[1200px] mt-16">
            <h2 className="text-2xl">{header}</h2>
            {reviews && contentLimit ? (
                <div className="flex mb-4 flex-wrap">
                    {reviews.slice(0, contentLimit).map((review) => (
                        <div className="flex flex-col justify-center w-[30%] ml-5 mr-2 my-8 border border-gray-600 rounded-lg" key={review.id}>
                            <Link href="/">
                                <Image
                                    src={review.img}
                                    width={1920}
                                    height={1080}
                                    alt={review.alt}
                                    className="rounded-t-lg"
                                />
                                <div className="flex flex-col gap-3 px-5 py-4">
                                    <div className="text-md text-gray-600">{review.perf_date}</div>
                                    <h3 className="text-xl">{review.band_name}</h3>
                                    <p className="">{review.short_comments}</p>
                                    <div className="text-gray-600">Read More...</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            ) : (
                <h2>Loading...</h2>
            )}

        </div>
    );
};

export default HomeReviews;
