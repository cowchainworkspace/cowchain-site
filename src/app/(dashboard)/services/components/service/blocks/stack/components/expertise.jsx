import { CollapsedIcon } from "./collapsed-icon";

export const ExpertiseBlock = ({ title, text, tools }) => {
  return (
    <article className="relative col-span-1 row-span-1 cursor-default">
      <div className="relative flex !max-h-[112px] !min-h-[112px] flex-col justify-between">
        <p className="body3 max-w-[294px] uppercase !leading-[90%] text-white">
          {title}
        </p>
        <div className="tools_wrapper absolute bottom-0 left-0 flex items-center md:w-[200%]">
          {tools.map((tool, index) => (
            <CollapsedIcon key={index} {...tool} />
          ))}
        </div>
      </div>
      {text && (
        <div className="mt-[60px] flex max-w-[370px] items-center">
          <p
            style={{
              color: "#BBBBBB"
            }}
            className="text-[16px] leading-[22px]"
          >
            {text}
          </p>
        </div>
      )}
    </article>
  );
};
