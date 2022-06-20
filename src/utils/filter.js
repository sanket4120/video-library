const filterVideos = (videos, filters) => {
  let filteredVideos = [...videos];

  if (filters.category && filters.category !== 'all') {
    filteredVideos = filteredVideos.filter((video) => {
      return video.category.toLowerCase() === filters.category.toLowerCase();
    });
  }

  if (filterVideos.length > 0) {
    if (filters.searchQuery) {
      filteredVideos = filteredVideos.filter((video) =>
        video.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }
  }

  return filteredVideos;
};

export { filterVideos };
