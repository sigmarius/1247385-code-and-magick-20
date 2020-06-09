'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SIRNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var similarListElements = userDialog.querySelector('.setup-similar-list');

userDialog.classList.remove('hidden');

var generateRandomIndex = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var generateOneWizard = function (name, sirname, coatColor, eyesColor) {
  var wizardName = name[generateRandomIndex(0, name.length)];
  var wizardSirname = sirname[generateRandomIndex(0, sirname.length)];
  var wizardCoatColor = coatColor[generateRandomIndex(0, coatColor.length)];
  var wizardEyesColor = eyesColor[generateRandomIndex(0, eyesColor.length)];
  return {
    name: wizardName + ' ' + wizardSirname,
    coatColor: wizardCoatColor,
    eyesColor: wizardEyesColor
  };
};

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    var wizard = generateOneWizard(WIZARD_NAMES, WIZARD_SIRNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS);
    wizards.push(wizard);
  }
  return wizards;
};

var renderOneWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizards = generateWizards();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderOneWizard(wizards[i]));
  }
  return fragment;
};

similarListElements.appendChild(renderWizards());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
