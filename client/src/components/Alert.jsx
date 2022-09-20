import { useSelector, useDispatch } from "react-redux";

const Alert = () => {
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state);
  return (
    <div
      className={`w-full py-3 flex justify-between items-center px-3 rounded-md ${alert.variant}`}
    >
      <h5 className={`${alert.textVariant} font-medium text-md`}>
        {alert.message}
      </h5>
      <button
        onClick={() => dispatch({ type: "CLOSE_ALERT" })}
        className={`font-semibold text-sm cursor-pointer ${alert.textVariant}`}
      >
        x
      </button>
    </div>
  );
};

export default Alert;
