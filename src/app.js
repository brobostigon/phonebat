var UI = require('ui');

var Battery = navigator.battery || navigator.webkitBattery ||
		navigator.mozBattery || navigator.msBattery;

var detailCard = new UI.Card({

  console.log('Level: ' + Math.floor(Battery.level * 100) + '%'); // 30%
  console.log('Charging: ' + Battery.charging);                   // true
});
detailCard.show();