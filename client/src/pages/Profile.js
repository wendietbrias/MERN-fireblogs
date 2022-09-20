import { useDispatch, useSelector } from "react-redux";
import { Footer, Navbar } from "../components";
import decode from "jwt-decode";
import { useState } from "react";
import { UpdateProfile } from "../action/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const decoded = auth ? decode(auth) : null;
  const [formProfile, setFormProfile] = useState({
    firstName: decoded?.firstName,
    lastName: decoded?.lastName,
    name: decoded?.name,
    email: decoded?.email,
  });
  const [openModal, setOpenModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(UpdateProfile(formProfile, setOpenModal));
  };

  const formHandler = (e) => {
    return setFormProfile({ ...formProfile, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full">
      <Navbar />
      {openModal && (
        <div
          style={{ backgroundColor: "rgba(10,10,10,0.5)" }}
          className="fixed top-0 left-0 min-h-screen w-full flex items-center justify-center"
        >
          <div className="rounded-lg bg-white shadow-sm text-center py-7 px-12">
            <h3 className="text-2xl font-semibold">Profile is saved</h3>
            <button
              onClick={() => setOpenModal(false)}
              className="py-3 mt-4 px-5 rounded-full bg-gray-800 text-sm text-white font-medium"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
      <div className="w-full lg:w-[50%] mx-auto my-0 lg:my-10 bg-gray-200 py-14 lg:py-7 px-10">
        <h2 className="text-2xl text-center capitalize font-medium">
          Your Profile
        </h2>
        <form onSubmit={submitHandler} className="mt-7 text-center">
          <div className="w-full">
            <input
              type="text"
              name="firstName"
              value={formProfile.firstName}
              onChange={formHandler}
              placeholder="Firstname"
              className="w-full py-2 px-3 rounded-md bg-white outline-none text-sm font-medium"
            />
          </div>
          <div className="w-full mt-3">
            <input
              type="text"
              name="lastName"
              value={formProfile.lastName}
              onChange={formHandler}
              placeholder="LastName"
              className="w-full py-2 px-3 rounded-md bg-white outline-none text-sm font-medium"
            />
          </div>
          <div className="w-full mt-3">
            <input
              type="text"
              name="name"
              value={formProfile.name}
              onChange={formHandler}
              placeholder="Name"
              className="w-full py-2 px-3 rounded-md bg-white outline-none text-sm font-medium"
            />
          </div>
          <div className="w-full mt-3">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formProfile.email}
              onChange={formHandler}
              className="w-full py-2 px-3 rounded-md bg-white outline-none text-sm font-medium"
            />
          </div>
          <button className="py-3 mt-10 px-7 rounded-full bg-gray-800 text-sm text-white font-medium">
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Profile;
