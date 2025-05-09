import { useMemo, useState } from "react";

export function useFilteredCases(cases) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredCases = useMemo(() => {
    if (selectedTags.length === 0) return cases;

    return cases.filter((item) =>
      item.tags.some((tag) =>
        selectedTags
          .map((t) => t.toLowerCase())
          .includes(tag.tagName.toLowerCase())
      )
    );
  }, [cases, selectedTags]);

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
    selectedTags,
    setSelectedTags,
    loadMore,
    isLoadingMore,
    hasMore: visibleCount < totalFiltered
  };
}
