'use strict';

// загрузка данных с сервера, отправка на сервер
(function () {

  var RESPONSE = 'json';
  var TIMEOUT = 10000;

  var Url = {
    LOAD: 'https://javascript.pages.academy/code-and-magick/data',
    SAVE: 'https://javascript.pages.academy/code-and-magick'
  };

  var Method = {
    GET: 'GET',
    POST: 'POST'
  };

  var StatusCode = {
    OK: 200
  };

  var loadHandler = function (request, successHandler, failHandler) {
    request.addEventListener('load', function () {
      if (request.status === StatusCode.OK) {
        successHandler(request.response);
      } else {
        failHandler('Статус ответа: ' + request.status + ' ' + request.statusText);
      }
    });
    request.addEventListener('error', function () {
      failHandler('Произошла ошибка соединения');
    });
    request.addEventListener('timeout', function () {
      failHandler('Запрос не успел выполниться за ' + request.timeout + 'мс');
    });
    request.timeout = TIMEOUT;
  };

  var setRequest = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = RESPONSE;
    loadHandler(xhr, onLoad, onError);
    return xhr;
  };

  var load = function (onLoad, onError) { // загрузка данных с сервера
    var xhr = setRequest(onLoad, onError);
    xhr.open(Method.GET, Url.LOAD);
    xhr.send();
  };

  var save = function (data, onLoad, onError) { // отправка данных на сервер
    var xhr = setRequest(onLoad, onError);
    xhr.open(Method.POST, Url.SAVE);
    xhr.send(data);
  };


  window.backend = {
    load: load,
    save: save
  };

})();
