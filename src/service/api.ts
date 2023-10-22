import axios, { isCancel } from "axios";

interface Response {
  data: any | null;
  error: Error | null;
}

export const get = async (url: string, signal?: AbortSignal): Promise<Response> => {
  try {
    const response = await axios.get(url, {
      signal,
    }); 
    
    return {
      data: response.data,
      error: null,
    }
  } catch (error: any) {
    console.log(`Got error in get api url: ${url}`, error);
    return {
      error,
      data: null,
    }
  }
}

export const post = async (url: string, body: Object): Promise<Response> => {
  try {
    const response = await axios.post(url, {
      ...body,
    }); 

    return {
      data: response.data,
      error: null,
    }
  } catch (error: any) {
    console.log(`Got error in post api url: ${url}`, body, error);
    return {
      error,
      data: null,
    }
  }
}

export const deleteRequest = async (url: string): Promise<Response> => {
  try {
    const response = await axios.delete(url); 
    
    return {
      data: response.data,
      error: null,
    }
  } catch (error: any) {
    console.log(`Got error in delete api url: ${url}`, error);
    return {
      error,
      data: null,
    }
  }
}

export const isRequestCancelled = (error: Error) => isCancel(error);