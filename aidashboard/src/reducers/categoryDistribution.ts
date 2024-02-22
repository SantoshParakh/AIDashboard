const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const categoryDistributionReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_CATEGORY_DISTRIBUTION_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_CATEGORY_DISTRIBUTION_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case 'FETCH_CATEGORY_DISTRIBUTION_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryDistributionReducer;
  