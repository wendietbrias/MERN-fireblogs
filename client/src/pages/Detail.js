import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Detail = () => {
  const params = useParams();
  const { post: posts } = useSelector((state) => state);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (posts) {
      const findPost = posts.find((post) => post._id === params.id);
      setDetail(findPost);
    }
  }, [posts]);

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-[65%] mx-auto py-10">
        <h2 className="text-3xl font-medium">{detail?.title}</h2>
        <p className="text-md font-normal mt-4">
          Posted on :{" "}
          {detail?.createdAt
            ? new Date(detail.createdAt).toDateString()
            : new Date().toDateString()}
        </p>
        <img
          src={detail?.cover}
          className="w-full h-[450px] rounded-lg mt-7 object-cover"
          alt={detail?.title}
        />
        <div
          className="mt-7"
          dangerouslySetInnerHTML={{ __html: detail?.content }}
        ></div>
      </div>
      <Footer />
    </section>
  );
};

export default Detail;
