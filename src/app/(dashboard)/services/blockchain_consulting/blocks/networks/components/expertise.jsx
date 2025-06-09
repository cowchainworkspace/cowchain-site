import { cn } from "@/lib/utils";
import Image from "next/image";

export const ExpertiseBlock = ({ title, text, img, index }) => {
  return (
    <article
      className={cn(
        "expertise_wrapper md-border-r group relative cursor-default border-b border-b-th-fade px-4 py-12 md:border-t md:border-t-th-fade lg:min-h-[388px] lg:px-10 xl:px-16 xl:py-20",
        {
          "border-t border-t-th-fade": index === 0
        }
      )}
    >
      <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
      <div className="relative">
        <div className="flex items-center gap-2 md:items-start md:justify-start">
          <Image
            alt="Background decoration ellipse"
            width={24}
            height={24}
            src={img.data.attributes.url}
          />
          <p className="font-roc text-xl uppercase text-white">{title}</p>
        </div>
        <p className="expertise_text mt-8 text-[#bbb] transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0">
          {text}
        </p>
      </div>
    </article>
  );
};
