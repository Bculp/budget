import axios from 'axios';
import { Month } from './Types/Month';

const url = 'http://localhost:4000';

export const getAllMonths = async (): Promise<Month[]> => {
  try {
    const response = await axios.get(`${url}/month`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMonth = async (id: string) => {
  try {
    const response = await axios.get(`${url}/month/${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const createMonth = async (body: Month) => {
  try {
    const response = await axios.post(`${url}/month`, body);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const updateMonth = async (id: string) => {
  try {
    const response = await axios.put(`${url}/month/${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const deleteMonth = async (id: string) => {
  try {
    const response = await axios.delete(`${url}/month/${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
