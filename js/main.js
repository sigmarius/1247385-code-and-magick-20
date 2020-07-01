'use strict';

// точка входа

(function () {

  window.form.setWizardClickHandler();
  window.form.setFireballClickHandler();
  window.form.setSumitHandler();

  window.backend.load(window.render.successLoadHandler);

})();
