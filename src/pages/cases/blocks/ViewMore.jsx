export const ViewMoreSection = ({ casesCount, count, setCount }) => {
  return (
    <section id="view_more" className="relative overflow-hidden">
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col gap-y-8 border-b border-b-th-fade px-4 py-16 text-center md:gap-y-24 md:py-24 ">
          <h3 className="mx-auto text-center text-2xl uppercase">
            {count} of {casesCount} projects
          </h3>
          <button
            className="btn-contact mx-auto uppercase lg:h-48 lg:w-48"
            onClick={() => setCount(casesCount)}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};
