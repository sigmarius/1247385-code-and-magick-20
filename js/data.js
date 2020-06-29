'use strict';

// генерирует похожих волшебников - generate-similar.js

(function () {

  var FIRST_NAMES = [
    'Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
  ];
  var LAST_NAMES = [
    'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
  ];

  var WIZARD_COUNT = 4;

  var generateWizards = function () {
    var wizards = [];

    for (var i = 0; i < WIZARD_COUNT; i++) {
      wizards.push({
        name: window.common.getRandomElement(FIRST_NAMES) + ' ' + window.common.getRandomElement(LAST_NAMES),
        coatColor: window.common.getRandomElement(window.common.COAT_COLORS),
        eyesColor: window.common.getRandomElement(window.common.EYE_COLORS)
      });
    }

    return wizards;
  };

  window.data = {
    generateWizards: generateWizards
  };
})();
