'use strict';

// рендер волшебников, полученных с сервера

(function () {

  var WIZARD_COUNT = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElements = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderOneWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successLoadHandler = function (arrWizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(renderOneWizard(arrWizards[i]));
    }

    similarListElements.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    successLoadHandler: successLoadHandler
  };
})();
