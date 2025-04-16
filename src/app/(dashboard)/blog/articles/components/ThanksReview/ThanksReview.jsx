export const ThanksReview = ({ review }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="tracking-0 mb-10 text-center font-roc text-[24px] leading-6 text-white">
        Thanks, your opinion helps
        <br /> us to get better!
      </h3>
      <div className="flex  flex-col items-center">
        <span className="text-md:text-[54px] text-[36px]">{review.icon}</span>
        <p className="max-w-[80px] text-xs font-medium leading-4 text-white md:text-base md:leading-6">
          {review.text}
        </p>
      </div>
    </div>
  );
};
