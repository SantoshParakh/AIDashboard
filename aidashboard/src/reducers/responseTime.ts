
const initialState = {
    dayWise: [],
    weekWise: [],
    loading: false,
    error: null,
  };
  
  const responseTimesReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_RESPONSE_TIMES_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_RESPONSE_TIMES_SUCCESS':
        return {
          ...state,
          loading: false,
          dayWise: action.payload.dayWise,
          weekWise: action.payload.weekWise,
        };
      case 'FETCH_RESPONSE_TIMES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default responseTimesReducer;
  