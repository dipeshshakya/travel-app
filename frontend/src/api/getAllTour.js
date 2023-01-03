import axios from "axios";

export const getAllTour = ()=>{
    return axios
      .get('http://localhost:1337/api/tour-packages/?populate=*', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        return res.data;
      });
}