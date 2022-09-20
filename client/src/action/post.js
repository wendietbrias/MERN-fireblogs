import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:8000/api/post",
});

const GetAllPost = (setIsLoading) => async (dispatch) => {
  setIsLoading(true);
  try {
    const { data } = await API.get("/all");
    if (data) {
      dispatch({ type: "GET_ALL_POST", payload: data });
    }
  } catch (err) {
    console.log(err);
  }
  setIsLoading(false);
};

const CreatePost = (postContent) => async (dispatch) => {
  try {
    const { data } = await API.post("/create", postContent);
    if (data) {
      dispatch({ type: "CREATE_POST", payload: data });
      window.location.href = "http://localhost:3000/blogs";
    }
  } catch (err) {
    return err;
  }
};

export { GetAllPost, CreatePost };
