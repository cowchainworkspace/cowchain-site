import Link from "next/link";

export const Post = ({ attributes }) => {
  return (
    <article className="1440custom:w-[600px] group relative grid h-[479px] w-[271px] grid-rows-[233px_1fr] overflow-hidden border-r border-r-th-fade md:h-[622px] md:w-[368px] md:grid-rows-[370px_1fr]">
      <div className="absolute right-5 top-5 z-10  items-center justify-center opacity-0  transition-opacity duration-300 group-hover:opacity-100">
        <Link
          href={`/blog/articles/${attributes?.slug}`}
          className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-center font-roc text-sm font-medium uppercase text-black shadow-sm lg:h-24 lg:w-24 lg:text-base"
        >
          Read
        </Link>
      </div>
      <div
        className="h-[233px] w-[271px]  transition-transform duration-200 group-hover:scale-95 group-hover:scale-95 md:h-[370px] md:w-full"
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

        <Link
          className="font-roc text-base font-medium uppercase text-white underline"
          href={`/blog/articles/${attributes?.slug}`}
        >
          READ MORE
        </Link>
      </div>
    </article>
  );
};
