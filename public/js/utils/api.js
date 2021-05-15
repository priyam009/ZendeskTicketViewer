function api(url) {
  //Handling HTTP GET request with error
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }

      return response;
    })
    .catch((error) => {
      console.error({ status: error.status, message: error.statusText });
      return error;
    });
}

export default api;
