import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Counter = ({ target, duration, decimals }) => {
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
          <span className="font-roc text-[18px] md:text-4xl font-medium leading-[18px] md:leading-tight text-white" ref={countUpRef} />
        )}
      </CountUp>
    </div>
  );
};
