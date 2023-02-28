const reducer = (state, action) => {
  const { count , cartData } = state;

  switch (action.type) {
    case "valueUpdate":
      return ({
        ...state,
        gameData: action.payload,
        loading: false
      })
    case "updateCart":
      return ({
        ...state,
        cartData: [...cartData ,action.payload],
        count: count + 1
      })
      case "showDetails":
        return({
          ...state,
          details: action.payload
        })
    default: {
      return null
    }
  }
}

export default reducer;
