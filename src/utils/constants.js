const GOOGLE_API_KEY = "AIzaSyA99N7SIlXgkLExqNQN93xoljth9SD8lCo";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );
