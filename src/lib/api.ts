const owmKey = process.env.REACT_APP_OPENWEATHERMAP_KEY!;
const ipdataKey = process.env.REACT_APP_IPDATA_KEY!;
const upsplashKey = process.env.REACT_APP_UPSPLASH_KEY!;

export const ipdata = {
  url: `https://api.ipdata.co?api-key=${ipdataKey}`,
  key: ipdataKey,
};
export const openWeatherMap = {
  currentWeatherUrl: `https://api.openweathermap.org/data/2.5/weather?&appid=${owmKey}&units=metric&q=`,
  next5DayUrl: `https://api.openweathermap.org/data/2.5/forecast?appid=${owmKey}&units=metric&q=`,
  key: owmKey,
};
export const upsplash = {
  url: `https://api.unsplash.com/search/photos?per_page=5&client_id=${upsplashKey}&query=`,
  key: upsplashKey,
};
