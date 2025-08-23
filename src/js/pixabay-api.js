import  axios from "axios";

export default async function getImagesByQuery(query, page) {
  const reply = await axios.get('/api/', {
    params: {
      key: '51453441-8ba936d16adf232cd1ca4d1fd',
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