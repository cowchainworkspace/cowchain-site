import Image from "next/image";

export const Post = ({ attributes }) => {
  return (
    <article className="relative  grid h-[479px] w-[271px] grid-rows-[233px_1fr] overflow-hidden border-r border-r-th-fade md:h-[622px] md:w-[368px] md:grid-rows-[370px_1fr]">
      <div
        className="h-[233px] w-[271px] group-hover:scale-95 md:h-[370px] md:w-[368px]"
        style={{
          backgroundImage: `url(${attributes?.preview_article_img?.data?.attributes?.url})`,
          backgroundPosition: "left",
          backgroundSize: "cover"
        }}
      />
      <div className="grid grid-rows-[auto_1fr_auto] flex-col gap-4 p-5 pb-7 md:gap-6 md:p-6 md:pb-[34px]">
        <h2 className="line-clamp-3 text-pretty md:line-clamp-2 lg:!text-lg">
          {attributes?.article_title}
        </h2>
        <div className="text-balance !text-[#bbb]">
          {attributes?.article_description?.slice(0, 1).map((text) => (
            <p className="line-clamp-4 text-pretty text-sm text-secondary md:line-clamp-3">
              {text.children[0]?.text}
            </p>
          ))}
        </div>

        <a
          className="font-roc text-base font-medium uppercase text-white underline"
          href={`/blog/articles/${attributes?.slug}`}
        >
          READ MORE
        </a>
      </div>
    </article>
  );
};
