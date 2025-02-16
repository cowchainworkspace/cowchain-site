import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const Category = ({ title }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || "";
  const pathname = usePathname();

  const createCategoryParams = (tag) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag.toLowerCase() === currentTag.toLowerCase()) {
      params.delete("tag");
      return params.toString();
    }
    params.set("tag", tag.toLowerCase());

    return params.toString();
  };

  return (
    <button
      type="button"
      onClick={() => {
        router.push(`${pathname}?${createCategoryParams(title)}`);
      }}
      className={cn(
        "pointer cursor-pointer  whitespace-nowrap  rounded-[40px] bg-white/10 px-6 py-[11px] text-[14px] font-medium uppercase leading-[14px] text-white md:text-base",
        {
          "bg-white text-black":
            currentTag.toLowerCase() === title.toLowerCase()
        }
      )}
    >
      {title}
    </button>
  );
};
