const initialState = {
  isOpen: false,
  message: "",
  variant: "",
  textVariant: "",
};

const AlertHandler = (state = initialState, { type, payload }) => {
  if (type === "OPEN_ALERT") {
    return {
      ...state,
      isOpen: true,
      message: payload.message,
      variant: payload.variant,
      textVariant: payload.textVariant,
    };
  } else if (type === "CLOSE_ALERT") {
    return {
      ...state,
      isOpen: false,
    };
  }

  return state;
};

export default AlertHandler;
