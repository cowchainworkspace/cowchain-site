import { DotsLoader } from "@/components/loader/DotsLoader";
import { cn } from "@/lib/utils";

export const ViewMoreSection = ({
  current,
  count,
  showMorePosts,
  isFetchingNextPage
}) => {
  return (
    <section
      id="view_more"
      className="relative z-10 overflow-hidden border-y border-y-th-fade"
    >
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-y-5 px-4 py-16 text-center ">
          <h3 className="mx-auto text-center text-2xl leading-7">
            {!count || count === 0
              ? "There are no articles yet"
              : `You are viewing ${current} of ${count} articles`}
          </h3>

          <button
            type="button"
            className={cn("btn-submit  bg-white uppercase xl:px-12", {
              "pointer-events-none opacity-50": current >= count
            })}
            onClick={() => {
              showMorePosts();
            }}
            disabled={!count || count === 0 || current >= count}
          >
            {isFetchingNextPage ? <DotsLoader /> : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
};
