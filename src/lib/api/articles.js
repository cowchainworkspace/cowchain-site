
import axios from 'axios';
import qs from 'qs';

const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
const API_URL = new URL('/api/articles', process.env.NEXT_PUBLIC_STRAPI_URL);

export async function getArticleBySlug(currentSlug) {

  const queryParams = qs.stringify({
    filters: {
      slug: {
        $eq: currentSlug
      }
    },
    populate: {
      banner_img: {
        populate: ["url"]
      },
      author_avatar: {
        populate: ["url"]
      },
      article_paragraphs: {
        populate: "*"
      },
      SEO: {
        populate: "*"
      }
    },
  }, {
    encodeValuesOnly: true,
  })

  API_URL.search = queryParams;
  const res = await axios.get(
    API_URL.href,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }
  );

  if (!res.data) {
    throw new Error('Article not found');
  }

  return res.data.data[0];
}

export async function getArticles(currentTag, pageParam) {
  const queryParams = qs.stringify({
    ...(currentTag && {filters: {
      tag: {
        $eqi: currentTag
      }
    }}),
    populate: {
      preview_article_img: { fields: ["url"] }
    },
    sort: ["date:desc"],
    fields: ['article_title', "slug", "id", "article_description", "tag", "author_name", "reading_minutes"],
    pagination: { page: pageParam, pageSize: 5},
  }, {
    encodeValuesOnly: true,
  })

  API_URL.search = queryParams;

  const res = await axios.get(API_URL.href,
    
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      }
    }
  );
  
  if (!res.data) {
    throw new Error('Articles not found');
  }
  
  return res.data;
}

export async function updateArticleViews(articleId) {
  try {
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles/${articleId}/view`, {}, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      }
    });
    if(!response.data) {
      throw new Error("Article view's is not updated")
    }
    return response.data
  } catch (error) {
    console.error(`View is not updated: ${error}`)
    throw new Error('View is not updated')
  }
}

export async function getMoreArticles(currentSlug, pageParam) {
  const queryParams = qs.stringify({
    filters: {
      slug: {
        $ne: currentSlug
      }
    },
    populate: {
     preview_article_img: { fields: ["url"] }
    },
    sort: ["date:desc"],
    fields: ['article_title', "slug", "id", "article_description", "tag"],
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
}

