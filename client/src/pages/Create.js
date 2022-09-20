import { useState, useEffect } from "react";
import { CreatePost } from "../action/post";
import { Footer, Navbar } from "../components";
import FileBase64 from "react-file-base64";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [formContent, setFormContent] = useState({
    title: "",
    cover: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreatePost(formContent));
  };

  return (
    <section className="w-full min-h-screen">
      <Navbar />
      <div className="py-10 px-14">
        <div className="flex items-center gap-5">
          <input
            value={formContent.title}
            onChange={(e) =>
              setFormContent({ ...formContent, title: e.target.value })
            }
            type="text"
            placeholder="Title"
            className="border-b-2 outline-none border-gray-700 pb-2 w-[350px] bg-transparent"
          />

          <FileBase64
            onDone={({ base64 }) =>
              setFormContent({ ...formContent, cover: base64 })
            }
            style={{ display: "none" }}
          />
        </div>
        <ReactQuill
          className="h-[280px]  mt-8 mb-20 border-none"
          theme="snow"
          value={formContent.content}
          onChange={(value) =>
            setFormContent({ ...formContent, content: value })
          }
        />
        <div>
          <button
            onClick={handleSubmit}
            className="inline-block rounded-full py-3 px-6 text-white text-sm font-medium bg-gray-800"
          >
            Publish a post
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Create;
