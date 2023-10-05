import axios from 'axios';

const url = 'http://localhost:4000';

interface Month {
  month: String;
  year: Number;
  Income: {
    job: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    other: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
    total: {
      actual: Number;
      budgeted: Number;
      difference: Number;
    };
  };
}

export const getAllMonths = async () => {
  try {
    const response = await axios.get(`${url}/month`);
    console.log(response);
  } catch (error) {
    console.error(error);
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
