import { cn } from "@/lib/utils";
import Image from "next/image";

export const ExpertiseBlock = ({ title, text, img, index }) => {
  return (
    <article className={cn("expertise_wrapper md:border-t md:border-t-th-fade md-border-r group relative cursor-default border-b border-b-th-fade px-4 py-12 lg:min-h-[388px] lg:px-10 xl:px-16 xl:py-20", {
      'border-t border-t-th-fade': index === 0,
    })}>
      <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
      <div className="relative">
        <div className="flex items-center gap-2 md:items-start md:justify-start">
          <Image alt="" width={24} height={24} src={img.data.attributes.url} />
          <p className="font-roc text-xl uppercase text-white">{title}</p>
        </div>
        <p className="expertise_text mt-8 text-[#bbb] lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {text}
        </p>
      </div>
    </article>
  );
};
