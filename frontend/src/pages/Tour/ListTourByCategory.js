import React from 'react';
import { useParams } from 'react-router';

const ListTourByCategory = () => {
  const { Slug } = useParams();
  console.log(Slug);
  return <div>ListTourByCategory</div>;
};

export default ListTourByCategory;
