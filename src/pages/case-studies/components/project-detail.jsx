export const ProjectDetail = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-4 border-t-[1px] border-white/50 py-8">
      <span className=" text-xs uppercase tracking-[2px] text-secondary">
        {title}
      </span>
      <div className="text-xl text-white">{content}</div>
    </div>
  );
};
