'use strict';

// сообщение об ошибке загрузки данных

(function () {

  var showError = function (errorMsg) {
    var message = document.createElement('div');
    message.style = 'position: absolute; top: 0; left: 0; right: 0; z-index: 10; margin: 0 auto; padding: 50px; font-size: 2em; text-align: center; background-color: rgba(255, 0, 0, 0.9);';

    message.textContent = errorMsg;
    document.body.appendChild(message);
  };

  window.message = {
    showError: showError
  };

})();
