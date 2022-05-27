import axios from 'axios';
import { handleError } from '~/services/api/errorHandler';

const apiClient = (defaultConfigs) => async (requestConfig) => {
  const token = getToken();

  try {
    const response = await axios.request({
      ...defaultConfigs,
      method: requestConfig.method,
      data: requestConfig.data,
      params: requestConfig.params,
      ...(token && { headers: { Authorization: `Bearer ${token}` } })
    })

    return {
      code: response.status,
      success: true,
      data: response.data.data ? response.data.data : response.data,
      error: response.statusText,
    }
  } catch (error) {
    return handleError(error);
  }
}

export const adminApi = apiClient({url: process.env.REACT_APP_API_ROOT});