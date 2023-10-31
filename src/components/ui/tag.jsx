import { cn } from "lib/utils";

export default function Tag({ title, className }) {
  return (
    <div
      className={cn(
        "mr-auto rounded-full border border-white px-3 py-[6px] lg:px-8 lg:py-3",
        className
      )}
    >
      <p className="text-sm font-medium text-white md:text-base">{title}</p>
    </div>
  );
}
