import { Report } from 'notiflix/build/notiflix-report-aio';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_zCiVd50a3V7t7TuYXdfB9KTAH1xhyV1X86STptt1kYgLBtXc9C5uwkrMB1UXLg85';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';



export function fetchBreeds() {
  return axios.get(`/breeds`).then(response => {
      return response.data;
  })
}

export function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`)
      .then((response) => {
  return response.data;
})
}


