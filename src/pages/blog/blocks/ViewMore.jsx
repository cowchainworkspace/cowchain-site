export const ViewMoreSection = () => {
  return (
    <section
      id="view_more"
      className="relative z-10 mt-16  overflow-hidden md:mt-20"
    >
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-y-8 px-4 py-16 text-center ">
          <h3 className="mx-auto text-center text-2xl">
            You are viewing 5 of 41 articles
          </h3>
          <button type="submit" className="btn-submit uppercase xl:px-12">
            view more
          </button>
        </div>
      </div>
    </section>
  );
};
