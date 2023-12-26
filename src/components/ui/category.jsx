export const Category = ({ title, setTags }) => {
  const handleClick = () => {
    setTags((tags) => [...tags, title]);
  };

  return (
    <button
      onClick={() => handleClick(title)}
      className="pointer cursor-pointer  whitespace-nowrap  rounded-[40px] bg-white/10 px-6 py-[11px] text-[14px] font-medium uppercase leading-[14px] text-white md:text-base"
    >
      {title}
    </button>
  );
};
