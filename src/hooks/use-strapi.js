import {getArticleBySlug, getArticles, getMoreArticles, updateArticleViews} from '@/lib/api/articles'
import { queryOptions, useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

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

export const useGetMorePosts = (currentSlug) => {

  return useInfiniteQuery({
    queryKey: ['posts', currentSlug],
  
    queryFn: async ({pageParam = 1}) => getMoreArticles(currentSlug,pageParam),
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


export const useMutatePost = () => {
  return useMutation({
    mutationFn: async({article, article_rating }) => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/reviews`, {
          data: {
            article,
            article_rating
          }
        }, {headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        }})
        if (!response.data.data) {
          throw new Error('Error post creating');
        }
        return response.data
      } catch (error) {
        console.error(`Error post creating: ${error}`)
        throw new Error("Review is not created")
      }
    },
    
  })
}

export const useMutatePostView = () => {
 const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateArticleViews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['article'],
        type: 'active'
      })
    }
  })
}

export const articleOptions = (currentSlug) => queryOptions({
  queryKey: ['article', currentSlug],
  queryFn: () => getArticleBySlug(currentSlug),
  onError: (err) => {
    console.error(err);
  },
});

export const blogOptions = (currentTag) => queryOptions({
  queryKey: ['articles', currentTag],
  queryFn: ({pageParam = 1}) => getArticles(currentTag, pageParam),
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
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  initialPageParam: 1,
})