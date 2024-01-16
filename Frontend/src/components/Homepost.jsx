/* eslint-disable react/prop-types */
import { IF } from "../url";
export const Homepost = ({ post }) => {
  return (
    <div className="w-full flex mt-10 space-x-4">
      <div className="w-[36%] h-[300px] flex justify-center items-center">
        <img
          src={IF + post.photo}
          alt="#"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex  flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center  justify-between py-2 md:md-4 ">
          <p>{post.username}</p>
          {/*<div className="flex space-x-4">
            <p>{new Date(post.updateAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updateAt).toString().slice(16, 24)}</p>
  </div>*/}
        </div>
        <p className="text-sm md:text-lg">
          {post.desc.slice(0, 200) + "... Read more"}
        </p>
      </div>
    </div>
  );
};
