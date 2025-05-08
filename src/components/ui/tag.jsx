import { cn } from "@/lib/utils";

export default function Tag({ title, className }) {
  return (
    <div
      className={cn(
        "w-fit cursor-default rounded-full border border-white px-4 py-1 capitalize lg:px-6 lg:py-2",
        className
      )}
    >
      <p className="font-roc text-[12px] text-white sm:text-base">{title}</p>
    </div>
  );
}
