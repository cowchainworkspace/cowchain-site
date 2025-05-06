import {useMemo, useState } from "react"

export function useFilteredCases(cases) {
  const [selectedTag, setSelectedTag] = useState('all filters');
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredCases = useMemo(() => {
    if (selectedTag === 'all filters') return cases;
    return cases.filter((item) =>
      item.tags.some(
        (tag) => tag.tagName.toLowerCase() === selectedTag.toLowerCase()
      )
    );
  }, [cases, selectedTag]);

  const totalFiltered = filteredCases.length;
  const visibleCases = filteredCases.slice(0, visibleCount);

  const loadMore = async () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);

    await new Promise((res) => setTimeout(res, 500));

    setVisibleCount((prev) => prev + 5);
    setIsLoadingMore(false);
  };

  return {
    visibleCases,
    totalFiltered,
    selectedTag,
    setSelectedTag,
    loadMore,
    isLoadingMore,
    hasMore: visibleCount < totalFiltered,
  };
}