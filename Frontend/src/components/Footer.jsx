export const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-mb py-8">
        <div className="flex flex-col text-white">
          <p>Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>supporta</p>
          <p>Recent Post</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Privary Policy</p>
          <p>About Us</p>
          <p>Terms & Conitions</p>
          <p>Terms & Servies</p>
        </div>
      </div>
      <p className="py-2 pb-6 text-center text-white bg-black text-sm">
        All Rights reserved @Blog seVen 2023
      </p>
    </>
  );
};
