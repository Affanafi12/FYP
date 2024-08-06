import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ info }) => {
  return (
    <>
        {info.map((blog) => {
            return (
                <div className="w-5/6 mx-auto my-5 p-4 shadow-lg border border-black text-center">
                    <h1 className="text-red-600 underline text-3xl font-semibold">{blog.name}</h1>
                    <p className="py-2">{blog.detail}</p>
                    <Link to={blog.site}><button className="border border-black p-2 bg-red-600 text-white rounded-lg">Read The Blog</button></Link>
                </div>
            )
        })
        }
    </>
  );
};

export default BlogCard;
