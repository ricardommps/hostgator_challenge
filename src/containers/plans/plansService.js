import axios from 'axios';

export async function getPlans() {
  return axios.get(`api/prices/`);
}
