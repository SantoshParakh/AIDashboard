import { Dispatch } from 'redux';
import { AiData } from './type';

export const fetchCategoryDistribution = () => async (dispatch: Dispatch, getState: any) => {
  try {
   
    const response = await fetch('/data/data.json');
    const data: AiData['category_distribution'] = await response.json();
    dispatch({ type: 'FETCH_CATEGORY_DISTRIBUTION_SUCCESS', payload: data });
  } catch (error: any) { 
    dispatch({ type: 'FETCH_CATEGORY_DISTRIBUTION_FAILURE', payload: error.message });
  }
};

export const fetchResponseTimes = () => async (dispatch: Dispatch, getState: any) => {
  try {
   
    const response = await fetch('/data/data.json');
    const data: AiData['response_times'] = await response.json();
    dispatch({ type: 'FETCH_RESPONSE_TIMES_SUCCESS', payload: data });
  } catch (error: any) { 
    dispatch({ type: 'FETCH_RESPONSE_TIMES_FAILURE', payload: error.message });
  }
};
