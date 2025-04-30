export const ProjectDetail = ({ title, content, countryImg }) => {
  return (
    <div className="flex flex-col gap-4 border-t-[1px] border-white/50 px-5 py-8 lg:px-0">
      <span className=" text-xs uppercase tracking-[2px] text-secondary">
        {title}
      </span>
      {title === "geography" ? (
        <div className="flex flex-row items-center gap-2 text-xl text-white">
          <img src={countryImg?.url} className={"h-6 w-6 "} /> {content}
        </div>
      ) : (
        <div className="text-xl text-white">{content}</div>
      )}
    </div>
  );
};
