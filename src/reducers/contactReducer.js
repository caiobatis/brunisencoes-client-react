const initialState = {
  loading: false,
  success: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_SUCCESS_CONTACT":
      return {
        ...state,
        success: true,
        error: false
      }

    case "RECEIVE_ERROR_CONTACT":
      return {
        ...state,
        error: true,
        success: false
      }

    case "FETCH_CONTACT":
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state;
  }
}