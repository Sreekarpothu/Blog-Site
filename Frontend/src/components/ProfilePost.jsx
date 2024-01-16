/* eslint-disable react/prop-types */
import { IF } from "../url";
export const ProfilePost = ({ p }) => {
  return (
    <div className="w-full flex mt-10 space-x-4">
      <div className="w-[36%] h-[300px] flex justify-center items-center">
        <img
          src={IF + p.photo}
          alt="#"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex  flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {p.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center  justify-between py-2 md:md-4 ">
          <p>@{p.username}</p>
          {/*<div className="flex space-x-4">
                <p>7/7/2007</p>
                <p>7:07</p>
  </div>*/}
        </div>
        <p className="text-sm md:text-lg">
          {p.desc.slice(0, 200) + "...Read more"}
        </p>
      </div>
    </div>
  );
};
