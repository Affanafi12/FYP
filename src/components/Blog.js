import React from "react";
import BlogCard from "./BlogCard";
import { blogList } from "../utlis/data";

const Blog = () => {
  return (
    <>
    <div className="bg-gray-100">
      <div className="text-center py-10">
        <button className="px-4 py-3 font-bold rounded-full border border-black cursor-none">
          Lastest Blog
        </button>
        <h1 className="text-green-500 text-4xl font-bold m-2">
          Our Lastest BLogs
        </h1>
      </div>
      <BlogCard info={blogList} />
      </div>
    </>
  );
};

export default Blog;
