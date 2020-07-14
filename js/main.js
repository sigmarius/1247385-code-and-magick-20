'use strict';

// точка входа

(function () {

  window.form.setWizardClickHandler();
  window.form.setFireballClickHandler();
  window.form.setSubmitHandler();

  window.backend.load(window.form.successLoadHandler, window.message.errorHandler);

})();
