import { cn } from "@/lib/utils";

export default function Tag({ title, className }) {
  return (
    <div
      className={cn(
        "cursor-default rounded-full w-fit border border-white px-4 py-1 lg:px-6 lg:py-2",
        className
      )}
    >
      <p className="text-[16px] font-medium text-white sm:text-base">{title}</p>
    </div>
  );
}
