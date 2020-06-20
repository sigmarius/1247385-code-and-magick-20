'use strict';

// перемещение диалогового окна по экрану - dialog.js

(function () {
  var moveButton = document.querySelector('.upload');

  var moveButtonHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var moveButtonMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shiftCoords = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      window.common.userDialog.style.top = (window.common.userDialog.offsetTop - shiftCoords.y) + 'px';
      window.common.userDialog.style.left = (window.common.userDialog.offsetLeft - shiftCoords.x) + 'px';
    };

    var moveButtonStopHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', moveButtonMoveHandler);
      document.removeEventListener('mouseup', moveButtonStopHandler);

      if (dragged) {
        var clickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          moveButton.removeEventListener('click', clickPreventDefaultHandler);
        };
        moveButton.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', moveButtonMoveHandler);
    document.addEventListener('mouseup', moveButtonStopHandler);
  };

  moveButton.addEventListener('mousedown', moveButtonHandler);

  window.dialog = {
    getDefaultPosition: function () {
      window.common.userDialog.style = '';
    }
  };
})();
