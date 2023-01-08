const RANDOM_JOKES_URL = "https://official-joke-api.appspot.com/random_ten";

export const getJokes = async () => {
  const res = await fetch(RANDOM_JOKES_URL);
  const data = await res.json();
  return data;
};
