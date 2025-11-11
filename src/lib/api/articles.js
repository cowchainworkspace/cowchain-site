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
      banner_img: true,
      author_avatar: true,
      article_paragraphs: {
        populate: '*',
      },
      SEO: {
        populate: '*',
      },
      article_tag: {
        fields: ['tag_name'],
      }
    },
  }, {
    encodeValuesOnly: true,
  });

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
      article_tag: {
        tag_name: {
          $eqi: currentTag
        }
      }
    }}),
    populate: {
      preview_article_img: { fields: ["url"] },
      article_tag: {
        fields: ["tag_name"]
      }
    },
    sort: ["date:desc"],
    fields: ['article_title', "slug", "id", "article_description", "author_name", "reading_minutes"],
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


export async function getAllArticles() {
  const FIELDS = [
    'slug',
    'id',
  ];

  const PAGE_SIZE = 100; // uses your Strapi maxLimit if configured; will still work if Strapi caps it lower

  const fetchPage = async (page) => {
    const url = new URL(API_URL.href);
    url.search = qs.stringify(
      {
        fields: FIELDS,
        pagination: { page, pageSize: PAGE_SIZE },
      },
      { encodeValuesOnly: true }
    );

    const res = await axios.get(url.href, {
      headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
    });

    if (!res.data) throw new Error('Articles not found');
    return res.data; 
  };

  // 1) Get first page to discover total pageCount
  const first = await fetchPage(1);
  const all = Array.isArray(first.data) ? [...first.data] : [];
  const pageCount = first?.meta?.pagination?.pageCount ?? 1;

  // 2) Fetch remaining pages sequentially (simple & reliable)
  for (let page = 2; page <= pageCount; page += 1) {
    const next = await fetchPage(page);
    if (Array.isArray(next.data)) all.push(...next.data);
  }

  return {
    data: all,
    meta: first.meta, 
  };
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
     preview_article_img: { fields: ["url"] },
     article_tag: {
      fields: ["tag_name"]
    }
    },
    sort: ["date:desc"],
    fields: ['article_title', "slug", "id", "article_description"],
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


export async function getTags() {
  const queryParams = qs.stringify({

    fields: ["id", "tag_name"],

 
  }, {
    encodeValuesOnly: true,
  })
  const url = new URL('/api/tags', process.env.NEXT_PUBLIC_STRAPI_URL);
  url.search = queryParams;

  const res = await axios.get(url.href,
    
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      }
    }
  );
  
  if (!res.data) {
    throw new Error('Tags not found');
  }
  
  return res.data;
}
