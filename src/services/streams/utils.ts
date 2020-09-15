/**
 * returns true if a string is a twitch URL
 *
 * @param url
 */
export const urlIsTwitch = (urlString: string | undefined): boolean => {
  return Boolean(urlString && urlString?.includes("twitch.tv"));
};

/**
 * returns true if a string is a youtube URL
 *
 * @param url
 */
export const urlIsYoutube = (urlString: string | undefined): boolean => {
  return Boolean(urlString && urlString?.includes("youtube.com"));
};

/**
 * Naive way to find the twitch channel from a url string
 *
 * @param urlString
 */
export const getTwitchChannelFromUrl = (
  urlString: string | undefined
): string => {
  if (urlString === undefined || !urlIsTwitch(urlString)) {
    throw Error();
  }
  //TODO: Make this more robust
  const url = new URL(urlString);
  return url.pathname.substr(1);
};

/**
 * Naive way to find the youtube id from a url string
 *
 * @param urlString
 */
export const getYoutubeVideoIdFromUrl = (
  urlString: string | undefined
): string => {
  if (urlString === undefined || !urlIsYoutube(urlString)) {
    throw Error();
  }
  const url = new URL(urlString);
  const videoId = url.searchParams?.get("v");
  if (videoId === null) {
    throw Error();
  }
  return videoId;
};
