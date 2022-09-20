const PostHandler = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_ALL_POST":
      state = payload;
      return state;
      break;

    case "CREATE_POST":
      state = [...state, payload];
      return state;
      break;

    default:
      return state;
  }
};

export default PostHandler;
