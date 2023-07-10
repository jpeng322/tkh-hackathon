import React, { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchCard from "../components/SearchCard";
import human from "humanparser";
import Autocomplete from "react-google-autocomplete";

const Posts = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);

  return (
    <>
      <div className=" relative  flex flex-col w-full h-full font-poppins ">
        <div className=" flex flex-col px-20 py-5   ">
          {/* <input
            className="w-1/2 border h-10 justify-self-center self-center rounded-lg ps-4"
            type="text"
            value={searchInput}
            placeholder="Search for information!"
            onChange={(e) => setSearchInput(e.target.value)}
          /> */}
          <div className="flex flex-col self-center w-full p-3 gap-10  ">
            <div className="flex gap-5">
              <div className="w-full text-6xl  text-black">
                Find Sustainable Solutions for Your Home
              </div>
            </div>

            <div className=" backdrop-blur-xl backdrop-opacity-95  overflow-hidden h-5/6 ">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="location" className="text-3xl text-black">
                    Location
                  </label>
                  <Autocomplete
                    options={{
                      types: ["street_number", "street_address"],
                      // types: ["(cities)"],
                    }}
                    className="w-3/4 border p-4 rounded-xl h-12"
                    style={{ backgroundColor: "rgba(204, 219, 207, 0.40)" }}
                    apiKey={import.meta.env.VITE_GOOGLE_API}
                    onPlaceSelected={(place) => {
                      setLocation(place.formatted_address);
                    }}
                    placeholder="Enter Location"
                  />
                </div>
                <div className="flex gap-4 text-black">
                  <div className="flex flex-col gap-3 ">
                    <label htmlFor="living-situation" className="text-2xl ">
                      Living Situation:{" "}
                    </label>
                    <select
                      className=" shadow-md w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="living-situation"
                      id="living-situation"
                      onChange={(e) => setLivingSituation(e.target.value)}
                    >
                      <option selected="selected">Please Select ▼</option>
                      <option value="urban">Urban</option>
                      <option value="suburban">Suburban</option>
                      <option value="rural">Rural</option>
                    </select>
                  </div>
                  <div className="flex flex-col  gap-3">
                    <label htmlFor="type" className="text-2xl">
                      Difficulty:{" "}
                    </label>
                    <select
                      className=" shadow-md w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="type"
                      id="type"
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option selected="selected">Please Select ▼</option>

                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-lg rounded-3xl  py-2 px-5 bg-green-background text-white-highlight"
                    onClick={(e) => searchPost(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          // style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
          className=" px-20 "
        >
          <div
            style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
            className="hidden md:block md:absolute w-[1000px] h-[382px] bottom-0 right-0"
          ></div>
          <div className="flex justify-between items-center">
            <div className="text-4xl font-semibold z-10 text-green-background">
              Recommended
            </div>
            <div>Sort by ▼ </div>
          </div>{" "}
          <div className="flex flex-col  rounded-lg">
            {posts.map((post) => {
              return (
                <SearchCard
                  //         title="Green houses"
                  key={post.id}
                  id={post.id}
                  description={post.description}
                  votes={post.upvotes - post.downvotes}
                  username={post.userName}
                  posts={posts}
                  setPosts={setPosts}
                  difficulty={post.implementationDifficulty}
                  livingSituation={post.livingSituation}
                  location={post.state}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
