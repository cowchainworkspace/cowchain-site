import { DotsLoader } from "@/components/loader/DotsLoader";
import { Loading } from "@/components/loader/Loading";
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
      className="relative z-10 mt-10 overflow-hidden border-b  border-b-th-fade"
    >
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-y-8 px-4 py-16 text-center ">
          <h3 className="mx-auto text-center text-2xl">
            You are viewing {current} of {count} articles
          </h3>

          <button
            type="button"
            className={cn("btn-submit  bg-white uppercase xl:px-12", {
              "pointer-events-none opacity-50": current >= count
            })}
            onClick={() => {
              showMorePosts();
            }}
            disabled={current >= count}
          >
            {isFetchingNextPage ? <DotsLoader /> : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};
