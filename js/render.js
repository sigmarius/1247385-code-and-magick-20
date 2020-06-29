'use strict';

// генерирует похожих волшебников - generate-similar.js

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderOneWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (arrWizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arrWizards.length; i++) {
      fragment.appendChild(renderOneWizard(arrWizards[i]));
    }
    return fragment;
  };


  window.render = {
    renderWizards: renderWizards
  };
})();
