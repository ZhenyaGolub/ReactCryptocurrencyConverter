const initialState = {
    cryptocurrencies: [],
    isLoaded:false,
    firstInputValue:1,
    secondInputValue:1,
    firstActiveItem:'BTC',
    secondActiveItem:'ETH',
    unitCost:0
};

const reducer = (state = initialState, action) => {

  const changeUnitCost = () => {
    return(
      (state.cryptocurrencies.find((item) => item.name === state.firstActiveItem).price / state.cryptocurrencies.find((item) => item.name === state.secondActiveItem).price).toFixed(2) + " " + state.cryptocurrencies.find((item) => item.name === state.secondActiveItem).fullName
    )
  }

    if(action.type === "SET_CRYPTOCURRENCIES"){
      return{
        ...state,
        cryptocurrencies:action.payload,
        isLoaded:true,
        unitCost:(action.payload[0].price / action.payload[1].price).toFixed(2) + " " + action.payload.find((item) => item.name === state.secondActiveItem).fullName,
        secondInputValue:(action.payload[0].price / action.payload[1].price).toFixed(2)
      }
    }

    if(action.type === "CHANGE_FIRST_INPUT"){
      return{
        ...state,
        firstInputValue:action.payload,
        secondInputValue:(state.cryptocurrencies.find((item) => item.name === state.firstActiveItem).price / state.cryptocurrencies.find((item) => item.name === state.secondActiveItem).price).toFixed(2) * state.firstInputValue,
      }
    }

    if(action.type === "CHANGE_SECOND_INPUT"){
      return{
        ...state,
        secondInputValue:action.payload,
      }
    }

    if(action.type === "CHANGE_FIRST_INPUT_VALUE"){
      return{
        ...state,
        secondInputValue:((state.cryptocurrencies.find((item) => item.name === state.firstActiveItem).price / state.cryptocurrencies.find((item) => item.name === state.secondActiveItem).price) * state.firstInputValue).toFixed(3)
      }
    }

    if(action.type === "CHANGE_SECOND_INPUT_VALUE"){
      return{
        ...state,
        firstInputValue:((state.cryptocurrencies.find((item) => item.name === state.secondActiveItem).price / state.cryptocurrencies.find((item) => item.name === state.firstActiveItem).price) * state.secondInputValue).toFixed(3)
      }
    }

    if(action.type === "CHANGE_FIRST_SELECT"){
      return{
        ...state,
        firstActiveItem:action.payload,
      }
    }

    if(action.type === "CHANGE_SECOND_SELECT"){
      return{
        ...state,
        secondActiveItem:action.payload,
      }
    }

    if(action.type === "CHANGE_UNIT_VALUE"){
      return{
        ...state,
        unitCost:changeUnitCost()
      }
    }

    return state;
}

export default reducer;