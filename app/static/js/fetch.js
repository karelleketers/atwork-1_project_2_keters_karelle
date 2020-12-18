function getJSON(url, successHandler, errorHandler){
    // eslint-disable-next-line no-undef
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = (!xhr.responseType) ? JSON.parse(xhr.response) : xhr.response;
        successHandler && successHandler(data);
      } else {
        errorHandler && errorHandler(xhr.status);
      }
    };
    xhr.onerror = () => {
      errorHandler && errorHandler('Network Error!');
    };
    xhr.send(null);
}