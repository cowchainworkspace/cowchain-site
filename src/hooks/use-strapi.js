import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import qs from 'qs';

export const useGetItems = (section) => {
  const query = useQuery({
    queryKey: ['strapi', section],

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

export const useGetArticles = (sortParams) => {
  const { tag:currentTag } = sortParams;
 
  return useInfiniteQuery({
    queryKey: ['articles', currentTag],
  
    queryFn: async ({pageParam = 1}) => {
      const queryParams = qs.stringify({
        ...(currentTag && {filters: {
          tag: {
            $eqi: currentTag
          }
        }}),
        populate: {
          preview_img: { fields: ["url"] }
        },
        fields: ['title', "Slug", "id", "Text_block", "tag"],
        pagination: { page: pageParam, pageSize: 8 },
     
      }, {
        encodeValuesOnly: true,
      })
      const url = new URL('/api/articles', process.env.NEXT_PUBLIC_STRAPI_URL);
      url.search = queryParams;

      const res = await axios.get(url.href,
        
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          }
        }
      );
      
      if (!res.data) {
        throw new Error('Articles not found');
      }
      
      return res.data;
    },

    onError: (err) => {
      console.error(err);
    },
    getNextPageParam: (data) => {

      const {meta: {
        pagination
      }} = data;

       return pagination.page < pagination.pageCount 
       ? pagination.page + 1 
       : undefined
      },

    initialPageParam: 1,
  });
}

export const useGetArticleBySlug = (slug) => {
  return useQuery({
    queryKey: ['article', slug],

    queryFn: async () => {
      
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?filters[Slug][$eq]=${slug}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        }
      );
      
      if (!res.data.data.length) {
        throw new Error('Article not found');
      }
      
      return res.data.data[0];
    },

    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetMorePosts = (currentSlug) => {

  return useInfiniteQuery({
    queryKey: ['posts', currentSlug],
  
    queryFn: async ({pageParam = 1}) => {
      const queryParams = qs.stringify({
        filters: {
          Slug: {
            $ne: currentSlug
          }
        },
        populate: {
          preview_img: { fields: ["url"] }
        },
        fields: ['title', "Slug", "id", "Text_block",],
        pagination: { page: pageParam, pageSize: 8 },
     
      }, {
        encodeValuesOnly: true,
      })
      const url = new URL('/api/articles', process.env.NEXT_PUBLIC_STRAPI_URL);
      url.search = queryParams;

      const res = await axios.get(url.href,
        
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          }
        }
      );
      
      if (!res.data) {
        throw new Error('Articles not found');
      }
      
      return res.data;
    },

    onError: (err) => {
      console.error(err);
    },
    getNextPageParam: (data) => {

      const {meta: {
        pagination
      }} = data;

       return pagination.page < pagination.pageCount 
       ? pagination.page + 1 
       : undefined
      },

    initialPageParam: 1,
  });
}