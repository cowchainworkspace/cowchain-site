"use client";

import { useState, useMemo, useEffect } from "react";
import { HeroSection } from "./blocks/HeroSection";
import { CaseSplash } from "./components/case-splash";
import { useGetItems } from "@/hooks/use-strapi";

const Cases = () => {
  const { data: cases } = useGetItems("cases");
  const [tags, setTags] = useState([]);
  const filteredCases = useMemo(() => {
    if (tags.length === 0) return cases?.data;
    return cases?.data.filter((product) => {
      return tags.some((tag) => product.attributes.tags.includes(tag));
    });
  }, [tags, cases?.data]);
  const [count, setCount] = useState(cases?.data.length);

  useEffect(() => {
    if (tags.length === 0) setCount(cases?.data.length);
    else setCount(filteredCases.length);
  }, [tags, cases]);

  return (
    <section id="clients-wrapper">
      <div className="relative  bg-black">
        <HeroSection tags={tags} setTags={setTags} />
        <div className="flex flex-col items-center">
          {filteredCases?.slice(0, count).map((product, index) => (
            <CaseSplash
              key={`${product.attributes.title + index}`}
              {...product.attributes}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
