import { useSelector, useDispatch } from "react-redux";
import { Footer, Loading, Navbar, PostCard } from "../components";

const Blogs = ({ loading }) => {
  const { post: posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <section className="w-full min-h-screen bg-gray-100">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12 gap-5 xs:px-7 sm:px-0 lg:px-12 py-14">
          {posts?.map((post, idx) => (
            <PostCard key={idx} item={post} />
          ))}
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Blogs;
