import { useState, useCallback } from 'react';
import { AsyncState } from '../types/common/types';
import { AxiosError } from 'axios';

export function useApi<T = any>() {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const execute = useCallback(async (apiCall: () => Promise<T>) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const data = await apiCall();
      setState({ data, isLoading: false, error: null });
      return data;
    } catch (error) {
      let errorMessage = 'An error occurred';
      
      if (error instanceof AxiosError) {
        // Handle Axios errors
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.status) {
          switch (error.response.status) {
            case 400:
              errorMessage = 'Bad request';
              break;
            case 401:
              errorMessage = 'Unauthorized';
              break;
            case 403:
              errorMessage = 'Forbidden';
              break;
            case 404:
              errorMessage = 'Not found';
              break;
            case 500:
              errorMessage = 'Server error';
              break;
            default:
              errorMessage = `HTTP error ${error.response.status}`;
          }
        } else if (error.request) {
          errorMessage = 'Network error - no response received';
        } else {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setState({ data: null, isLoading: false, error: errorMessage });
      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
} 