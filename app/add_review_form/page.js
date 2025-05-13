"use client"
import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import "./add_review_form.scss";
import { Datepicker } from "flowbite-react";

export default function AddReviewForm() {
    const { venues } = useContext(AppContext);

    return (
        <div>

            {/* hero*/}
            <div className="h-[300px]! w-screen bg-[#007079]">
                <div className="flex flex-col self-center z-10 text-center">
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

                    <h1 className="text-white text-4xl font-bold drop-shadow-[3px_3px_3px_rgba(0,0,0,.85)] mt-52">
                        Entertainment Review Form
                    </h1>
                    <p className="text-white text-xl font-medium drop-shadow-[2px_2px_2px_rgba(0,0,0,.85)] mt-2">
                        Enter a new performer review using the form below.
                    </p>
                </div>
            </div>

            {/* form */}
            <form className="w-[50%] justify-self-center m-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="band_name" className="block mb-2  font-medium text-gray-900 ">Band Name:</label>
                        <input type="text" id="band_name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                    </div>

                    <div>
                        <label htmlFor="countries" className="block mb-2 font-medium text-gray-900">Venue:</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option defaultValue value="">Choose a venue</option>
                            {venues?.map((venue) => (
                                <option key={venue.id} value={venue.name}>
                                    {venue.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="crowd_size" className="block mb-2  font-medium text-gray-900 ">Crowd Size:</label>
                        <input type="number" id="crowd_size" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                    </div>

                    <div>
                        <label htmlFor="perf_date" className="block mb-2 font-medium text-gray-900 ">Performance Date:</label>
                        <Datepicker id="perf_date" />
                    </div>

                    <div>
                        <label htmlFor="start-time" className="block mb-2 font-medium text-gray-900 dark:text-white">Start time:</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="time" id="start-time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" defaultValue="00:00" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="end-time" className="block mb-2 font-medium text-gray-900 dark:text-white">End time:</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="time" id="end-time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" defaultValue="00:00" required />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="countries" className="block mb-2 font-medium text-gray-900">Rating:</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option defaultValue value="">Choose a rating</option>
                            <option value="1">1/5</option>
                            <option value="2">2/5</option>
                            <option value="3">3/5</option>
                            <option value="4">4/5</option>
                            <option value="5">5/5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="reviewer" className="block mb-2  font-medium text-gray-900 ">Reviewer Name:</label>
                        <input type="text" id="reviewer" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                    </div>

                    <div>
                        <label htmlFor="video" className="block mb-2  font-medium text-gray-900 ">Video URL:</label>
                        <input type="url" id="video" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" />
                    </div>

                    <div>
                        <label htmlFor="img" className="block mb-2  font-medium text-gray-900 ">Image URL:</label>
                        <input type="url" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                    </div>

                    <div>
                        <label htmlFor="alt" className="block mb-2  font-medium text-gray-900 ">Image Alt Tag:</label>
                        <input type="text" id="alt" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Enter a short description of the image" required />
                    </div>

                </div>

                <div>
                    <label htmlFor="long_comments" className="block mb-2 font-medium text-gray-900 dark:text-white">Your Review:</label>
                    <textarea id="long_comments" rows="4" className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your comments here..." required></textarea>
                </div>


                <button type="submit" className="text-white bg-[#007079] hover:bg-[#01585e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2 my-6 text-center">Add My Review!</button>
            </form>


        </div>
    );
}
