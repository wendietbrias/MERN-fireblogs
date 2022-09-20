const user = JSON.parse(localStorage.getItem("user")) || null;

const AuthHandler = (state = user, { type, payload }) => {
  if (type === "AUTH") {
    state = payload;
    localStorage.setItem("user", JSON.stringify(state));
    return state;
  } else if (type === "LOGOUT") {
    state = null;
    localStorage.setItem("user", JSON.stringify(state));
    return state;
  } else if (type === "UPDATE_PROFILE") {
    state = payload;
    localStorage.setItem("user", JSON.stringify(state));
    return state;
  }

  return state;
};

export default AuthHandler;
