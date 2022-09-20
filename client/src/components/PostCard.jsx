import { Link } from "react-router-dom";

const PostCard = ({ item }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-md shadow-sm overflow-hidden">
      <img
        src={item?.cover}
        alt={item.title}
        className="w-full h-[280px] rounded-md"
      />
      <div className="py-4 px-4">
        <h3 className="text-lg font-normal">{item?.title}</h3>
        <p className="text-sm mt-1">
          {item?.createdAt
            ? new Date(item.createdAt).toDateString()
            : new Date().toDateString()}
        </p>
        <Link to={`/detail/${item?._id}`}>
          <button className="font-medium text-sm mt-5">View post</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
