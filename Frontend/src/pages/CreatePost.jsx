import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("null");
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  const addCategory = () => {
    if (cat.trim() !== "") {
      setCats([...cats, cat]);
      setCat("");
    }
  };

  const deleteCategory = (index) => {
    let updatedCats = [...cats];
    updatedCats.splice(index, 1);
    setCats(updatedCats);
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      console.log(data);
      //img upload
      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
        console.log(imgUpload.data);
      } catch (err) {
        console.log(err);
      }
    }
    //post upload
    //console.log(post);
    try {
      const res = await axios.post(URL + "/api/posts/create", post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl ">Create a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-x-8 mt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 outline-none"
            placeholder="Enter Post Title"
            type="text"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            className="px-4"
            type="file"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 outline-none"
                placeholder="Enter Post category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-xl"
              >
                ADD
              </div>
            </div>
            {/* Categories */}
            <div className="flex px-4 mt-3">
              {cats.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-2 rounded-md"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className="px-4 py-2 outline-none"
            placeholder="Enter Post Description"
            cols="30"
            rows="15"
          ></textarea>
          <button
            onClick={handleCreate}
            className="bg-black w-full md:w-[20%] mx-auto  text-white font-semibold px-4 py-2 md:text-xl text-lg rounded-xl"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
