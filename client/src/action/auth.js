import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:8000/api/auth",
});

function openAlert(type, payload, dispatch) {
  return dispatch({ type, payload });
}

const SignInHandler = (formData) => async (dispatch) => {
  openAlert(
    "OPEN_ALERT",
    {
      message: "Redirected...",
      variant: "bg-blue-100",
      textVariant: "text-blue-500",
    },
    dispatch
  );
  try {
    const { data } = await API.post("/signin", formData);
    if (data) {
      dispatch({ type: "AUTH", payload: data });
      window.location.href = "http://localhost:3000";
    }
  } catch (err) {
    const { response } = err;
    openAlert(
      "OPEN_ALERT",
      {
        message: response.data.msg,
        variant: "bg-red-100",
        textVariant: "text-red-500",
      },
      dispatch
    );
  }
  openAlert("CLOSE_ALERT", {}, dispatch);
};

const SignUpHandler = (formData) => async (dispatch) => {
  openAlert(
    "OPEN_ALERT",
    {
      message: "Redirected...",
      variant: "bg-blue-100",
      textVariant: "text-blue-500",
    },
    dispatch
  );
  try {
    const { data } = await API.post("/signup", formData);
    if (data) {
      window.location.href = "http://localhost:3000/auth";
    }
  } catch (err) {
    const { response } = err;
    openAlert(
      "OPEN_ALERT",
      {
        message: response.data.msg,
        variant: "bg-red-100",
        textVariant: "text-red-500",
      },
      dispatch
    );
  }
  openAlert("CLOSE_ALERT", {}, dispatch);
};

const UpdateProfile = (formProfile, setOpenModal) => async (dispatch) => {
  try {
    const { data } = await API.patch(`/update`, formProfile);
    if (data) {
      dispatch({ type: "UPDATE_PROFILE", payload: data });
      setOpenModal(true);
    }
  } catch (err) {
    return err;
  }
};

const AddAdmin = (email,setErr) => async (dispatch) => {
   try {
      const { data } = await API.patch(`/admin/${email}`);
      return data;
   } catch(err) {
     const { response } = err;
      setErr({isOpen:true , msg:response.data.msg});
      return err;
   }
};

export { SignInHandler, SignUpHandler, UpdateProfile,AddAdmin };
