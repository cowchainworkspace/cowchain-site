import BookSvg from "@/assets/svg/blog/BookSvg";
import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Post = ({ atributes, isThreeLines = false }) => {
  const {
    slug,
    article_description,
    article_title,
    preview_article_img,
    tag,
    author_name,
    reading_minutes
  } = atributes || {};

  return (
    <Link
      href={`blog/articles/${slug}`}
      className={cn(
        "group relative  flex w-full cursor-pointer flex-col border-r-[0.5px] border-th-fade p-6 last-of-type:border-r-0 md:p-6"
      )}
    >
      <Image
        height={362}
        width={672}
        className="mb-8 max-h-[360px] w-full self-center object-contain transition-transform duration-200 group-hover:scale-95 md:aspect-video  md:h-auto md:object-fill"
        src={preview_article_img?.data?.attributes?.url}
        alt=""
      />

      <div className=" absolute right-5  items-center justify-center opacity-0  transition-opacity duration-300 group-hover:opacity-100">
        <button className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-center font-roc text-sm font-medium uppercase text-black lg:h-24 lg:w-24 lg:text-base">
          Read
        </button>
      </div>
      <div className="mb-6 flex items-center justify-between">
        <Tag title={tag} />
        <div className="flex items-center gap-2">
          <BookSvg />
          <p className="text-sm leading-[22px] text-secondary">{`${reading_minutes} min read`}</p>
        </div>
      </div>
      <h3 className="mb-4 font-roc text-lg font-medium uppercase leading-6 text-white">
        {article_title}
      </h3>
      <div
        className={cn("mb-6 line-clamp-4 md:line-clamp-[2]", {
          "md:line-clamp-3": isThreeLines
        })}
      >
        {article_description?.map((text) => (
          <p key={text.id} className="text-pretty text-sm text-secondary">
            {text.children[0]?.text}
          </p>
        ))}
      </div>
      <p className="text-sm text-secondary">
        Written by <span className="text-white">{author_name}</span>
      </p>
    </Link>
  );
};
