import { cn } from "@/lib/utils";

export const CaseDescription = ({tagsWidth, tags, caseName, caseDescription}) => {
  return (
    <>
      <ul
        className="mb-[25px] flex flex-wrap gap-2"
        style={{ maxWidth: `${tagsWidth}px` }}
      >
        {tags.map(({ tagName, isMain }) => (
          <li key={tagName}>
            <p
              className={cn(
                "flex h-8 items-center rounded-[18.41px] bg-white  h-[25px] px-[12px] py-[4px] sm:py-2 sm:px-[15px] text-[12px] sm:text-sm font-medium leading-[16.57px] text-[12.89] text-black",
                isMain && "font-bold"
              )}
            >
              {tagName}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="md:mb-6 font-montserrat text-[28px] leading-[90%] sm:text-[36px] font-semibold lg:leading-[60px] text-white md:text-[42px] lg:text-[60px]">
        {caseName}
      </h2>

      <p className="hidden font-manrope text-sm font-[450] leading-6 text-white-70 md:block">
        {caseDescription}
      </p>
    </>
  );
};
