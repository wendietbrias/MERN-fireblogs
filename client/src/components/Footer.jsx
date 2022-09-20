import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between flex-wrap gap-6 items-center bg-gray-800 py-10 px-14">
      <div className="flex items-center flex-wrap">
        <div>
          <Link to="/">
            <span className="text-3xl cursor-pointer font-medium text-white">
              FireBlogs
            </span>
          </Link>
          <ul className="flex  items-center mt-5">
            <AiOutlineInstagram className="text-2xl mr-3 text-white" />
            <AiFillLinkedin className="text-2xl mr-3 text-white" />
            <AiFillYoutube className="text-2xl mr-3 text-white" />
            <AiOutlineTwitter className="text-2xl mr-3 text-white" />
          </ul>
        </div>
        <ul className="ml-7 lg:ml-20">
          <li className="mb-2">
            <Link to="/">
              <span className="text-md font-normal uppercase text-white">
                home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="text-md font-normal uppercase text-white">
                Blogs
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/">
              <span className="text-md font-normal uppercase text-white">
                Login / Register
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-sm font-normal text-white">
        @copyright 2022/2023 wendietbrias
      </p>
    </footer>
  );
};

export default Footer;
