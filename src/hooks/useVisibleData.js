import { throttle } from 'lodash';
import { useEffect, useState } from 'react';



export const useVisibleData = (sections) => {
  const [visibleSection, setVisibleSection] = useState(sections?.[0]?.id || "");

  const getClosestSectionToTop = () => {
    if (!sections || sections.length === 0) return;

    const updateSections = sections
      .map(({ id }) => {
        const sectionElement = document.getElementById(id);
        if (!sectionElement) return null; 
        return {
          id,
          offset: sectionElement.getBoundingClientRect().top,
        };
      })
      .filter(Boolean); 

    if (updateSections.length === 0) return;

    const closestSection = updateSections.reduce((prev, curr) =>
      Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
    );

    setVisibleSection(closestSection.id);
  };

  useEffect(() => {
    if (sections && sections.length > 0) {
      const throttledScroll = throttle(getClosestSectionToTop, 300);
      window.addEventListener("scroll", throttledScroll);
      getClosestSectionToTop(); 

      return () => {
        window.removeEventListener("scroll", throttledScroll); 
      };
    }
  }, [sections]); // ✅ Ensures it updates when `sections` change

  return visibleSection;
};
