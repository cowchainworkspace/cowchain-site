import { cn } from "lib/utils";

export default function Tag({ title, className }) {
  return (
    <div
      className={cn(
        "rounded-full border border-white px-4 py-1 lg:px-6 lg:py-2",
        className
      )}
    >
      <p className="text-sm  font-medium text-white">{title}</p>
    </div>
  );
}
