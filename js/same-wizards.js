'use strict';

// модуль загрузки похожих волшебников

(function () {

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.form.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.form.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var compareNames = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var compareWizards = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = compareNames(left.name, right.name);
    }
    return rankDiff;
  };

  window.updateWizards = function (arrWizards) {
    window.renderWizards(arrWizards.slice().sort(compareWizards));
  };


})();
