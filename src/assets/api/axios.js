import axios from 'axios';

const baseURL = 'https://aviasales-test-api.kata.academy';

export async function getKey() {
  const response = await axios.get(`${baseURL}/search`);
  return await response.data;
}

export async function getDataCard(id) {
  const response = await axios.get(`${baseURL}/tickets?searchId=${id}`, {
    validateStatus: function (status) {
      return status !== 500;
    },
  });
  return await response.data;
}
