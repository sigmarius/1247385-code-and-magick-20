'use strict';

// точка входа

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElements = userDialog.querySelector('.setup-similar-list');

  var wizards = window.data.generateWizards();

  similarListElements.appendChild(window.render.renderWizards(wizards));
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

})();
