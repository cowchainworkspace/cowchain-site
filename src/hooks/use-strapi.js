import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGetItems = (section) => {
  const query = useQuery({
    queryKey: ['strapi', section], // query key

    queryFn: async () =>
      axios
        .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${section}?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        })
        .then((res) => res.data)
        .catch((err) => {
          console.log(err)
          if (err.response.status === 404) {
            throw new Error('User is not exist');
          }
          throw err;
        }),
  });
  return query;
};

export const useGetItem = (section, id) => {
  const query = useQuery({
    queryKey: ['item', id], // query key

    queryFn: async () =>
      axios
        .get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}${section}/${id}?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
          },
        )
        .then((res) => res.data)
        .catch((err) => {
          if (err.response.status === 404) {
            throw new Error('User is not exist');
          }
          throw err;
        }),
  });
  return query;
};
