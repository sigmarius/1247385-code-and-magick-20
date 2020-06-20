'use strict';

// открытие и закрытие модального окна настройки волшебника - setup.js

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupIcon = document.querySelector('.setup-open-icon');
  var setupClose = window.common.userDialog.querySelector('.setup-close');
  var setupUserInput = window.common.userDialog.querySelector('.setup-user-name');


  var togglePopupHandler = function (openPopup) {
    if (openPopup) {
      window.common.userDialog.classList.remove('hidden');
      window.dialog.getDefaultPosition();
      document.addEventListener('keydown', escapeKeyHandler);
    } else {
      window.common.userDialog.classList.add('hidden');
      document.removeEventListener('keydown', escapeKeyHandler);
    }
  };

  var escapeKeyHandler = function (evt) {
    if (evt.key === window.common.KeyCode.ESCAPE && evt.target !== setupUserInput) {
      evt.preventDefault();
      togglePopupHandler(false);
    }
  };

  setupOpen.addEventListener('click', function () {
    togglePopupHandler(true);
  });

  setupClose.addEventListener('click', function () {
    togglePopupHandler(false);
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.common.KeyCode.ENTER) {
      togglePopupHandler(false);
    }
  });

  setupIcon.addEventListener('keydown', function (evt) {
    if (evt.key === window.common.KeyCode.ENTER) {
      togglePopupHandler(true);
    }
  });

})();

