import axios from "axios";
export const getAllCategory = () =>{
    return axios
      .get('http://localhost:1337/api/categories', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        return res.data;
      });
}