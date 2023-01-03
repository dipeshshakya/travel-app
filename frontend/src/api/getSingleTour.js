import axios from 'axios';
export const getSingleTour = (Slug) => {
  return axios
    .get(
      `http://localhost:1337/api/tour-packages/?filters[slug][$eq]=${Slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    )
    .then((res) => {
      return res.data.data[0].attributes;
    });
};
