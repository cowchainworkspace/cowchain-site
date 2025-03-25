import Image from "next/image";

export const Post = ({ attributes }) => {
  return (
    <article className="relative  h-[479px] w-[271px] overflow-hidden border-r border-r-th-fade md:h-[622px] lg:w-[368px]">
      <div
        className="h-[233px] w-[271px] group-hover:scale-95 md:h-[370px] md:w-[368px]"
        style={{
          backgroundImage: `url(${attributes?.preview_article_img?.url})`,
          backgroundPosition: "left",
          backgroundSize: "cover"
        }}
      />
      <div className="p-5 md:p-6">
        <h2 className="mb-4 line-clamp-3 text-pretty md:mb-6 md:line-clamp-2 lg:!text-lg">
          {attributes?.article_title}
        </h2>
        <div className="mb-[34px] line-clamp-4 text-balance !text-[#bbb] md:mb-14 md:line-clamp-3">
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
