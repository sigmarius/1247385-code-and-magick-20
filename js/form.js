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

  var wizards = []; // массив волшебников с сервера
  var coatColor = window.common.COAT_COLORS[0]; // выбранный цвет куртки, [0] для 1го прохода
  var eyesColor = window.common.EYE_COLORS[0]; // выбранный цвет глаз, [0] для 1го прохода

  var colorChangeHandler = function (element, input, color, arrColor) {
    color = window.common.getRandomElement(arrColor);
    element.style.fill = color;
    input.value = color;

    var updateColor = function () {
      window.updateWizards(wizards);
    };
    window.debounce(updateColor);
    return color;
  };

  var setWizardChange = function (evt) {
    switch (evt.target) {
      case wizardCoat :
        window.form.coatColor = colorChangeHandler(
            wizardCoat, coatInput, coatColor, window.common.COAT_COLORS);
        break;
      case wizardEyes :
        window.form.eyesColor = colorChangeHandler(
            wizardEyes, eyesInput, eyesColor, window.common.EYE_COLORS);
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

  var successLoadHandler = function (data) {
    wizards = data;
    window.updateWizards(wizards);
  };

  var setFormSubmit = function (evt) {
    window.backend.save(new FormData(form), successSaveHandler, window.message.errorHandler);
    evt.preventDefault();
  };

  var setWizardClickHandler = function () {
    wizardFull.addEventListener('click', setWizardChange);
  };

  var setFireballClickHandler = function () {
    fireball.addEventListener('click', setFireballChange);
  };

  var setSubmitHandler = function () {
    form.addEventListener('submit', setFormSubmit);
  };

  window.form = {
    setWizardClickHandler: setWizardClickHandler,
    setFireballClickHandler: setFireballClickHandler,
    setSubmitHandler: setSubmitHandler,
    successLoadHandler: successLoadHandler,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

})();
