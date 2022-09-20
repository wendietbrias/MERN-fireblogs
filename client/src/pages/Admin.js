import { Navbar } from "../components";
import { AddAdmin } from "../action/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Admin = () => {
  const [email,setEmail] = useState("");
  const [err,setErr] = useState({isOpen:false,msg:""});
  const dispatch = useDispatch();
  
  return (
    <section className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-[45%] mx-auto my-10 bg-gray-200 py-7 px-10">
        {err.isOpen && (
           <div className="text-center w-full">
            <h4 className="text-lg font-semibold mb-7">{err.msg}</h4>
           </div>
        )}
        <h3 className="text-2xl font-medium text-center capitalize">
          add the admin
        </h3>
        <form onSubmit={(e) => {
           e.preventDefault();
           dispatch(AddAdmin(email,setErr));
           setTimeout(() => setErr({isOpen:false}) ,1500)
        }} className="w-full mt-3 text-center">
          <div className="w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-3 w-full outline-none text-sm bg-white py-3 px-3 rounded-md"
              placeholder="Add admin..."
            />
          </div>
          <button type="submit" className="mt-7 py-3 px-5 rounded-full bg-gray-800 text-sm text-white font-medium">
            Add Admin
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
