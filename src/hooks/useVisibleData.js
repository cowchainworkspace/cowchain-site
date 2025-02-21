import { throttle } from 'lodash';
import { useEffect, useState } from 'react';


export const useVisibleData = (sections) => {
  const [visibleSection, setVisibleSection] = useState(sections[0].id)

  const getClosestSectionToTop = () => {
    const updateSections = sections.map(({id}) => ({
      id,
      offset: document.getElementById(id).getBoundingClientRect().top
    }))
    const closestSection = updateSections.reduce((prev, curr) =>
      Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
    );

  setVisibleSection(closestSection.id); 
  };


  useEffect(() => {
    if (sections) {
      window.addEventListener('scroll', throttle(getClosestSectionToTop, 300));
    }

    getClosestSectionToTop(sections);

    return () =>
      window.addEventListener('scroll', throttle(getClosestSectionToTop, 300));
  }, []);

  return visibleSection;
}
