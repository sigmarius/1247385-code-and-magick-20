'use strict';

// загрузка данных с сервера, отправка на сервер
(function () {

  var TIMEOUT = 10000;
  var StatusCode = {
    OK: 200
  };

  var load = function (onLoad, onError) { // загрузка данных с сервера
    var URL = 'https://javascript.pages.academy/code-and-magick/data';

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT;

    xhr.open('GET', URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) { // отправка данных на сервер
    var URL = 'https://javascript.pages.academy/code-and-magick';

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
