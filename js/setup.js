'use strict';

var FIRST_NAMES = [
  'Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
];
var LAST_NAMES = [
  'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COUNT = 4;

var KeyCode = {
  ENTER: 'Enter',
  ESCAPE: 'Escape'
};

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var similarListElements = userDialog.querySelector('.setup-similar-list');

var setupOpen = document.querySelector('.setup-open');
var setupIcon = document.querySelector('.setup-open-icon');
var setupClose = userDialog.querySelector('.setup-close');
var setupUserInput = userDialog.querySelector('.setup-user-name');

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var coatInput = userDialog.querySelector('input[name="coat-color"]');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
var fireball = userDialog.querySelector('.setup-fireball-wrap');
var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
var wizardFull = userDialog.querySelector('.wizard');

var generateRandomIndex = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomElement = function (arr) {
  return arr[generateRandomIndex(0, arr.length)];
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push({
      name: getRandomElement(FIRST_NAMES) + ' ' + getRandomElement(LAST_NAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYE_COLORS)
    });
  }

  return wizards;
};

var wizards = generateWizards();

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

similarListElements.appendChild(renderWizards(wizards));
userDialog.querySelector('.setup-similar').classList.remove('hidden');

// открытие и закрытие модального окна, настройка цветов главного волшебника

var togglePopupHandler = function (openPopup) {
  if (openPopup) {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', escapeKeyHandler);
  } else {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', escapeKeyHandler);
  }
};

var escapeKeyHandler = function (evt) {
  if (evt.key === KeyCode.ESCAPE && evt.target !== setupUserInput) {
    evt.preventDefault();
    togglePopupHandler(false);
  }
};

var wizardClickHandler = function (evt) {
  switch (evt.target) {
    case wizardCoat :
      wizardCoat.style.fill = getRandomElement(COAT_COLORS);
      coatInput.value = wizardCoat.style.fill;
      break;
    case wizardEyes :
      wizardEyes.style.fill = getRandomElement(EYE_COLORS);
      eyesInput.value = wizardEyes.style.fill;
      break;
  }
};

var fireballClickHandler = function () {
  var color = getRandomElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = color;
  fireballInput.value = color;
};

setupOpen.addEventListener('click', function () {
  togglePopupHandler(true);
});

setupClose.addEventListener('click', function () {
  togglePopupHandler(false);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === KeyCode.ENTER) {
    togglePopupHandler(false);
  }
});

setupIcon.addEventListener('keydown', function (evt) {
  if (evt.key === KeyCode.ENTER) {
    togglePopupHandler(true);
  }
});

wizardFull.addEventListener('click', wizardClickHandler);
fireball.addEventListener('click', fireballClickHandler);
