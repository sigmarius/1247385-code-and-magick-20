'use strict';

// настройка цветов главного волшебника, Отправка формы на сервер

(function () {

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var coatInput = userDialog.querySelector('input[name="coat-color"]');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');
  var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
  var wizardFull = userDialog.querySelector('.wizard');

  var coatColor = window.common.COAT_COLORS[0]; // выбранный цвет куртки, [0] для 1го прохода
  var eyesColor = window.common.EYE_COLORS[0]; // выбранный цвет глаз, [0] для 1го прохода

  var changeColor = function (element, input, color, arrColor) {
    color = window.common.getRandomElement(arrColor);
    element.style.fill = color;
    input.value = color;

    window.debounce(function () {
      window.updateWizards(window.wizards);
    });

    return color;
  };

  var wizardClickHandler = function (evt) {
    switch (evt.target) {
      case wizardCoat :
        window.form.coatColor = changeColor(
            wizardCoat, coatInput, coatColor, window.common.COAT_COLORS);
        break;
      case wizardEyes :
        window.form.eyesColor = changeColor(
            wizardEyes, eyesInput, eyesColor, window.common.EYE_COLORS);
        break;
    }
  };

  var fireballClickHandler = function () {
    var color = window.common.getRandomElement(window.common.FIREBALL_COLORS);
    fireball.style.backgroundColor = color;
    fireballInput.value = color;
  };

  var successSaveHandler = function () {
    userDialog.classList.add('hidden');
  };

  var setFormSubmit = function (evt) {
    window.backend.save(new FormData(form), successSaveHandler, window.message.errorHandler);
    evt.preventDefault();
  };

  wizardFull.addEventListener('click', wizardClickHandler);

  fireball.addEventListener('click', fireballClickHandler);

  var setSubmitHandler = function () {
    form.addEventListener('submit', setFormSubmit);
  };

  window.form = {
    setSubmitHandler: setSubmitHandler,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

})();
