import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col py-10">
      <ReactLoading
        type="spin"
        color={`rgb(16 185 129)`}
        width="150px"
        height="150px"
      />
    </div>
  );
};

export default Loading;
