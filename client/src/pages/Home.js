import { useState, useEffect } from "react";
import { Navbar, Button, Footer, Loading, PostCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import styles from "../constants/style";
import { Link } from "react-router-dom";

const Home = ({ loading }) => {
  const dispatch = useDispatch();
  const { post, auth } = useSelector((state) => state);

  return (
    <section className="w-full min-h-screen">
      <Navbar />
      {!auth && (
        <div className={`${styles.stretch}`}>
          <div className="w-[40%] bg-gray-700 text-white flex items-center flex-col justify-center">
            <div>
              <h2 className="font-normal text-4xl">WELCOME!</h2>
              <p className="text-sm font-normal leading-6  mt-4 mb-7">
                Weekly blog articles with all things <br /> programming
                including HTML, CSS, JavaScript <br /> and more. Register today
                to never miss a post!
              </p>
              <Button page="/auth" title="Login / Register" />
            </div>
          </div>
          <img
            src="images/coding.jpg"
            alt="coding"
            className="w-[60%] h-[85vh]"
          />
        </div>
      )}
      <div className={`${styles.stretch} flex-col md:flex-row`}>
        <img
          src="images/vue.png"
          className={`w-full lg:w-[60%] h-[65vh] lg:h-[70vh`}
          alt="vue"
        />
        <div className={`w-full lg:w-[40%] ${styles.centered} flex-col`}>
          <div className="lg:py-0 py-10">
            <h2 className="font-normal text-4xl leading-14">
              DYNAMIC PAGE
              <br /> TITLES WITH THE <br /> VUE ROUTER!
            </h2>
            <p className="text-sm font-normal leading-6  mt-4 mb-7">
              Weekly blog articles with all things <br /> programming including
              HTML, CSS, JavaScript <br /> and more. Register today to never
              miss a post!
            </p>
            <Button page="/detail" title="View Post" />
          </div>
        </div>
      </div>
      <div className={`${styles.stretch} lg:flex-row flex-col`}>
        <div
          className={`w-full lg:w-[40%] ${styles.centered} flex-col lg:order-none order-2`}
        >
          <div className="lg:py-0 py-7">
            <h2 className="font-normal text-4xl leading-14">
              CSS <br /> TRANSFORM: <br /> SKEWY | CREATE <br /> A <br />
              SLANTED/SKEWED <br /> DIV
            </h2>
            <p className="text-sm font-normal leading-6  mt-4 mb-7">
              Weekly blog articles with all things <br /> programming including
              HTML, CSS, JavaScript <br /> and more. Register today to never
              miss a post!
            </p>
            <Button page="/detail" title="View Post" />
          </div>
        </div>
        <img
          src="images/animated.png"
          className={`w-full lg:w-[60%] h-[65vh] lg:h-[70vh] lg:order-none order-1`}
          alt="vue"
        />
      </div>
      <div className="w-full bg-gray-100 py-12 px-14">
        <h3 className="text-2xl font-normal">View more recent blogs</h3>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-12 gap-5 mt-7">
            {post?.slice(0, 4)?.map((item, idx) => (
              <PostCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
      {!auth && (
        <div className={`${styles.between} w-full py-12 px-14`}>
          <h2 className="text-4xl">
            NEVER MISS A POST. <br />
            REGISTER FOR YOUR FREE <br /> ACCOUNT TODAY!
          </h2>
          <button className="bg-gray-800 text-white text-sm font-medium py-3 px-7 rounded-full">
            Login/Register
          </button>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Home;
