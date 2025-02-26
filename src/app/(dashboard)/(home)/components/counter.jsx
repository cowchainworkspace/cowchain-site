import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Counter = ({ target, duration, decimals, className }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        useEasing={true}
        decimals={decimals}
      >
        {({ countUpRef }) => (
          <span
            className={`block max-h-[18px] md:max-h-none overflow-hidden font-roc text-[18px] font-medium 
            leading-[18px] text-white md:text-4xl md:leading-tight ${className}`}
            ref={countUpRef}
          />
        )}
      </CountUp>
    </div>
  );
};
