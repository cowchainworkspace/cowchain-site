export const ProjectDetail = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-4 border-y-[1px] border-white/50 px-4 py-8">
      <span className="pb-4 text-base uppercase text-white/20">{title}</span>
      <div className="text-white">{content}</div>
    </div>
  );
};
