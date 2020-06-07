'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var COLUMN_GAP = 50;
var TEXT_HEIGHT = 40;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var YOU_COLOR = 'rgba(255, 0, 0, 1)';
var DEFAULT_COLOR = '#000';

var getOtherColor = function () {
  return 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 25%)';
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = DEFAULT_COLOR;

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP);

    ctx.fillText(Math.round(times[i]),
        CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP - TEXT_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime + GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = YOU_COLOR;
    } else {
      ctx.fillStyle = getOtherColor();
    }
    // не могу понять, почему тернарный оператор работает, но линтер на него ругается?... пришлось делать условие
    // (players[i] === 'Вы') ? (ctx.fillStyle = YOU_COLOR) : (ctx.fillStyle = getOtherColor());

    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = DEFAULT_COLOR;
  }
};
