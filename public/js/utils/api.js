function api(url) {
  //Handling HTTP GET request with error
  return fetch(url).then((response) => {
    return response;
  });
}

export default api;
