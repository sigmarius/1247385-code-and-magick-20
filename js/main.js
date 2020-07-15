'use strict';

// точка входа

(function () {

  var successLoadHandler = function (data) {
    // массив волшебников с сервера - window.wizards
    window.wizards = data;
    window.updateWizards(window.wizards);
  };

  window.form.setSubmitHandler();

  window.backend.load(successLoadHandler, window.message.showError);

  window.setAvatarChangeHandler();

})();
