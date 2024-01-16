import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between  px-6 md:px-[200] py-4">
        <h1 className="text-lg md:text-xl font-bold ">
          <Link to="/">seVen Blog</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left pb-5">
            Create an Account
          </h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="text"
            placeholder="Enter Your Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-lg"
            type="text"
            placeholder="Enter Your Mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2  border-black outline-0 rounded-lg"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg  mt-8 font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:bg-black-500"
          >
            Login
          </button>
          {error && (
            <h3 className="text-red-500 text-sm">something went worng</h3>
          )}
          <div className="flex justify-center items-center space-x-4">
            <p>Already have an Account ?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
