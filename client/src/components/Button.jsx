import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ page, title }) => {
  return (
    <Link to={page}>
      <button
        className={`text-sm font-medium ${
          page === "/auth" ? "text-white" : "text-gray-800"
        } flex items-center`}
      >
        {title}
        <AiOutlineArrowRight className={`text-lg ml-2`} />
      </button>
    </Link>
  );
};
export default Button;
