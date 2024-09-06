export const ViewMoreSection = ({ current, count, showMorePosts }) => {
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
            className={`btn-submit uppercase xl:px-12 ${current >= count ? "bg-transparent" : "bg-white"}`}
            onClick={showMorePosts}
            disabled={current >= count}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};
