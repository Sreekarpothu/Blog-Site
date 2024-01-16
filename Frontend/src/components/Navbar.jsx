import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { Menu } from "./Menu";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  //console.log(prompt);
  const showMenu = () => {
    setMenu(!menu);
  };
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between  px-6 md:px-[200] py-4">
      <h1 className="text-lg md:text-xl font-bold ">
        <Link to="/">seVen Blog</Link>
      </h1>
      {path === "/" && (
        <div className="flex justify-center items-center space-x-4">
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer"
          >
            <IoMdSearch />
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none w-full px-3 py-1"
            placeholder="Search a Post"
            type="text"
          />
        </div>
      )}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to="/create">Create</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer relative">
              <FaBars />
              {menu && <Menu />}
            </p>
          </div>
        ) : (
          <h3>
            <Link to="/register">Register</Link>{" "}
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden textlg">
        <p className="cursor-pointer relative">
          <FaBars />
          {menu && <Menu />}
        </p>
      </div>
    </div>
  );
};
