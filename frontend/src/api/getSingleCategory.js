import { useQuery } from 'react-query';
import { getAllTour } from './getAllTour';

export const getSingleCategory = (Slug) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery('tour', getAllTour);
  const tour = data?.data.filter(
    // eslint-disable-next-line eqeqeq
    (data) =>
      data.attributes.categories.data[0].attributes.Title.toLowerCase() === Slug
  );
  return tour;
};
