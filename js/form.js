'use strict';

// настройка цветов главного волшебника, Отправка формы на сервер

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var coatInput = userDialog.querySelector('input[name="coat-color"]');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');
  var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
  var wizardFull = userDialog.querySelector('.wizard');

  var setWizardChange = function (evt) {
    switch (evt.target) {
      case wizardCoat :
        wizardCoat.style.fill = window.common.getRandomElement(window.common.COAT_COLORS);
        coatInput.value = wizardCoat.style.fill;
        break;
      case wizardEyes :
        wizardEyes.style.fill = window.common.getRandomElement(window.common.EYE_COLORS);
        eyesInput.value = wizardEyes.style.fill;
        break;
    }
  };

  var setFireballChange = function () {
    var color = window.common.getRandomElement(FIREBALL_COLORS);
    fireball.style.backgroundColor = color;
    fireballInput.value = color;
  };

  var successSaveHandler = function () {
    userDialog.classList.add('hidden');
  };

  var setFormSubmit = function (evt) {
    window.backend.save(new FormData(form), successSaveHandler, errorHandler);
    evt.preventDefault();
  };

  var errorHandler = function (errorMessage) {
    var message = document.createElement('div');
    message.style = 'position: absolute; top: 0; left: 0; right: 0; z-index: 10; margin: 0 auto; padding: 50px; font-size: 2em; text-align: center; background-color: rgba(255, 0, 0, 0.9);';

    message.textContent = errorMessage;
    document.body.appendChild(message);
  };

  var setWizardClickHandler = function () {
    wizardFull.addEventListener('click', setWizardChange);
  };

  var setFireballClickHandler = function () {
    fireball.addEventListener('click', setFireballChange);
  };

  var setSumitHandler = function () {
    form.addEventListener('submit', setFormSubmit);
  };

  window.form = {
    setWizardClickHandler: setWizardClickHandler,
    setFireballClickHandler: setFireballClickHandler,
    setSumitHandler: setSumitHandler,
    errorHandler: errorHandler
  };

})();
