'use strict';

// устраняет дребезг

(function () {

  var DEBOUNCE_INTERVAL = 500; // 0.5c

  var lastTimeout; // запоминает последний таймаут

  window.debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

})();
