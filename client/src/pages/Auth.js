import bg from "../assets/background.png";
import styles from "../constants/style";
import { useState, useEffect } from "react";
import { BiLockAlt, BiEnvelopeOpen } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { SignInHandler, SignUpHandler } from "../action/auth";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "../components";

const Auth = () => {
  const dispatch = useDispatch();
  const { auth, alert } = useSelector((state) => state);
  const [isSignUp, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignUp) {
      return dispatch(SignInHandler(formData));
    }

    dispatch(SignUpHandler(formData));
  };

  useEffect(() => {
    if (auth) {
      window.location.href = "http://localhost:3000";
    }
  }, [auth]);

  return (
    <section className="flex items-stretch">
      <div
        className={`w-full lg:w-[40%] ${styles.centered} flex-col items-center justify-center h-screen  relative`}
      >
        {alert.isOpen && (
          <div className="w-full absolute top-0 left-0">
            <Alert />
          </div>
        )}
        <h2 className="text-3xl font-medium">
          {isSignUp ? "Create a Fireblogs" : "Login to Fireblogs"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 text-center">
          {isSignUp && (
            <div className="form-control relative mb-2">
              <AiOutlineUser className="absolute left-2 top-3 text-gray-500" />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                name="firstName"
                placeholder="Firstname"
                className="w-[400px]  text-sm rounded-md bg-gray-100 py-3 pr-3 pl-8 outline-none"
              />
            </div>
          )}
          {isSignUp && (
            <div className="form-control relative mb-2">
              <AiOutlineUser className="absolute left-2 top-3 text-gray-500" />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                name="lastName"
                placeholder="LastName"
                className="w-[400px]  text-sm rounded-md bg-gray-100 py-3 pr-3 pl-8 outline-none"
              />
            </div>
          )}

          {isSignUp && (
            <div className="form-control relative mb-2">
              <AiOutlineUser className="absolute left-2 top-3 text-gray-500" />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                name="name"
                placeholder="Name"
                className="w-[400px]  text-sm rounded-md bg-gray-100 py-3 pr-3 pl-8 outline-none"
              />
            </div>
          )}
          <div className="form-control relative">
            <BiEnvelopeOpen className="absolute left-2 top-3 text-gray-500" />
            <input
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              placeholder="Email"
              name="email"
              className="w-[400px]  text-sm rounded-md bg-gray-100 py-3 pr-3 pl-8 outline-none"
            />
          </div>
          <div className="form-control mt-2 relative">
            <BiLockAlt className="absolute left-2 top-3 text-gray-500" />
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="password"
              type="password"
              placeholder="Password"
              className="w-[400px]  text-sm rounded-md bg-gray-100 py-3 pr-3 pl-8 outline-none"
            />
          </div>
          <button className="mt-4 text-center underline text-sm font-medium block">
            Forgot password?
          </button>
          <button className="py-3 rounded-full px-7 text-sm font-medium capitalize text-white bg-gray-800 mt-7">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div
          onClick={() => setIsSignup(!isSignUp)}
          className="cursor-pointer switch-btn mt-5"
        >
          {isSignUp ? (
            <h5 className={`${styles.centered}`}>
              Already have account?
              <button className="text-center underline text-sm font-medium block">
                Login
              </button>
            </h5>
          ) : (
            <h5 className={`${styles.centered}`}>
              Don't have account?
              <button className="text-center underline text-sm font-medium block">
                Register
              </button>
            </h5>
          )}
        </div>
      </div>
      <div className="sm:hidden lg:block lg:w-[60%]">
        <img src={bg} alt="bg" className="w-full min-h-screen" />
      </div>
    </section>
  );
};

export default Auth;
