import  axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com';

export default async function getImagesByQuery(query, page) {

  const reply = await axios.get('/api/', {
    params: {
      key: '41896213-148f054eadfc6d224b6c8f8ef',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 15,
      safesearch: true,
    },
  });

  return reply.data;
}