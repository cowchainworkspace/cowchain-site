import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Post = ({ atributes }) => {
  const { slug, article_description, title, preview_article_img, tag } =
    atributes || {};

  return (
    <Link
      href={`blog/articles/${slug}`}
      className={cn(
        "group relative  flex w-full cursor-pointer flex-col  border border-th-fade p-2 md:p-6"
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

      <Tag className="mb-6 mr-auto" title={tag} />
      <h3 className="mb-4 font-roc text-lg font-medium uppercase leading-6 text-white">
        {title}
      </h3>
      <div className="line-clamp-[10]">
        {article_description?.map((text) => (
          <p className="text-pretty text-sm text-secondary">
            {text.children[0]?.text}
          </p>
        ))}
      </div>
    </Link>
  );
};
