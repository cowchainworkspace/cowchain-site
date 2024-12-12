import { CollapsedIcon } from "./collapsed-icon";

export const ExpertiseBlock = ({ title, text, tools }) => {
  return (
    <article className="relative col-span-1 row-span-1 cursor-default ">
      <div className="relative flex flex-col justify-between !min-h-[112px] !max-h-[112px]">
        <p className="body3 text-white">{title}</p>
        <div className="tools_wrapper flex items-center">
          {tools.map((tool, index) => (
            <CollapsedIcon key={index} {...tool} />
          ))}
        </div>
      </div>
    </article>
  );
};
