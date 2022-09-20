import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useState } from "react";
import styles from "../constants/style";

const Navbar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const decoded = auth ? decode(auth) : null;
  const [openDrop, setOpenDrop] = useState(false);
  const [openSide, setOpenSide] = useState(false);

  return (
    <nav className="w-full bg-white py-5 px-5 lg:px-14 shadow-sm flex items-center">
      <Link to="/">
        <span className="font-medium text-xl capitalize">FireBlogs</span>
      </Link>
      <div className="flex-1 flex justify-end items-center">
        <div>
          <ul
            className={`${styles.transition} flex  ${
              styles.responsiveNav
            } bg-gray-500 top-0 py-7 px-7 fixed ${
              openSide ? "left-0" : "-left-[100%]"
            } lg:static lg:w-max lg:py-0 lg:h-full lg:px-0 lg:items-center lg:flex-row  lg:bg-transparent`}
          >
            <li className="mr-5">
              <Link to="/">
                <span className="font-medium uppercase text-[17px] lg:text-[15px] text-white lg:text-gray-800">
                  Home
                </span>
              </Link>
            </li>
            <li className="mr-5 lg:mt-0 mt-2">
              <Link to="/blogs">
                <span className="font-medium uppercase text-[17px] lg:text-[15px] text-white lg:text-gray-800">
                  Blogs
                </span>
              </Link>
            </li>
            {!auth && (
              <li>
                <Link to="/auth">
                  <span className="font-medium uppercase text-[17px] lg:text-[15px] text-white lg:text-gray-800">
                    Login/Register
                  </span>
                </Link>
              </li>
            )}

            {decoded?.isAdmin && (
              <li>
                <Link to="/create">
                  <span className="font-medium uppercase text-[15px]">
                    Create Blog
                  </span>
                </Link>
              </li>
            )}
          </ul>
          <button
            onClick={() => setOpenSide(!openSide)}
            className="text-xl block lg:hidden"
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div className="ml-7 relative">
          {auth && (
            <span
              onClick={() => setOpenDrop(!openDrop)}
              className="cursor-pointer text-white font-semibold rounded-full w-[45px] h-[45px] bg-gray-800 flex items-center justify-center uppercase"
            >
              {decoded?.firstName?.charAt(0)}
            </span>
          )}

          {openDrop && (
            <div
              style={{ backgroundColor: "rgba(10,10,10,0.8)" }}
              className="py-5 px-5 rounded-md absolute -bottom-30 right-12"
            >
              <div className="border-b border-white pb-3 flex items-center">
                <span className="text-white font-semibold rounded-full w-[45px] h-[45px] bg-blue-200 flex items-center justify-center uppercase">
                  {decoded?.firstName?.charAt(0)}
                </span>
                <div className="flex-1 ml-4">
                  <h5 className="text-white font-medium">
                    {decoded?.firstName}
                  </h5>
                  <h6 className="text-sm font-normal  text-white">
                    {decoded?.email}
                  </h6>
                </div>
              </div>
              <ul className="mt-4">
                <li>
                  <Link to={"/profile"}>
                    <button className="flex text-sm items-center text-white">
                      <AiOutlineUser className="mr-2 text-lg" />
                      Profile
                    </button>
                  </Link>
                </li>
                {decoded?.isAdmin && (
                  <li className="my-3">
                    <Link to={"/admin"}>
                      <button className="flex text-sm items-center text-white">
                        <MdOutlineAdminPanelSettings className="mr-2 text-lg" />
                        Admin
                      </button>
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    className="flex text-sm items-center text-white"
                  >
                    <AiOutlineLogout className="mr-2 text-lg" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
