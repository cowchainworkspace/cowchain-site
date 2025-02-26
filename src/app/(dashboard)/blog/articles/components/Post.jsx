import Image from "next/image";

export const Post = ({ attributes }) => {
  return (
    <article className="relative w-[320px] border-r border-r-th-fade lg:w-[368px]">
      <Image
        height={360}
        width={672}
        className="max-h-[233px] w-full self-center object-cover object-fill group-hover:scale-95 md:aspect-square  md:h-auto md:max-h-[370px]"
        src={attributes?.preview_article_img?.data?.attributes?.url}
        alt="article image"
      />
      <div className="p-5 md:p-6">
        <h2 className="mb-4 text-pretty md:mb-6 lg:!text-lg">
          {attributes?.article_title}
        </h2>
        <div className="mb-[34px] line-clamp-3 text-balance !text-[#bbb] md:mb-14">
          {attributes?.article_description?.map((text) => (
            <p className="text-pretty text-sm text-secondary">
              {text.children[0]?.text}
            </p>
          ))}
        </div>
        <div className="mt-auto">
          <a href={`/blog/articles/${attributes?.slug}`}>
            <p className="font-roc text-base font-medium uppercase text-white underline">
              READ MORE
            </p>
          </a>
        </div>
      </div>
    </article>
  );
};
