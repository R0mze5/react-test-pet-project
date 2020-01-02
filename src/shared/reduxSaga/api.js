export const getXkcdImage = () =>
  fetch('http://localhost:5000/xkcd').then(response => response.json());
