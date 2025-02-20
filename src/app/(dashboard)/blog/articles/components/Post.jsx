import Image from "next/image";

export const Post = ({ attributes }) => {
  const toText = (node) => {
    const tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  return (
    <article className="relative w-[320px] border-r border-r-th-fade lg:w-[420px]">
      <Image
        height={360}
        width={672}
        className="mb-5 max-h-[170px] w-full self-center object-cover group-hover:scale-95 md:aspect-video md:h-auto  md:max-h-[360px] md:object-fill"
        src={attributes?.preview_article_img?.data?.attributes?.url}
        alt=""
      />
      <h2 className="mb-1 min-h-14 pr-2 lg:!text-lg">{attributes?.title}</h2>
      <div className="p mb-2 line-clamp-6 !text-[#bbb] md:line-clamp-[10]">
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
    </article>
  );
};
