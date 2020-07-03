'use strict';

// общие переменные, используемые для всего проекта

(function () {
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = [
    'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
  ];
  var generateRandomIndex = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getRandomElement = function (arr) {
    return arr[generateRandomIndex(0, arr.length)];
  };

  window.common = {
    EYE_COLORS: EYE_COLORS,
    COAT_COLORS: COAT_COLORS,
    KeyCode: {
      ENTER: 'Enter',
      ESCAPE: 'Escape'
    },
    getRandomElement: getRandomElement
  };
})();
