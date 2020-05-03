export const formatEpisodeNumber = (episodeNumber) =>
  Number(episodeNumber).toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
