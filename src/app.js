var UI = require('ui');
//var Vector2 = require('vector2');

var Battery = navigator.battery || navigator.webkitBattery ||
		navigator.mozBattery || navigator.msBattery;

var card = new UI.Card({
	title: 'boots',
	body: 'black',
});
card.title(Battery.charging);
card.body(Battery.level);
card.show();
	//text = Battery.level;
//console.log('Level: ' + Math.floor(Battery.level * 100) + '%')),
  //console.log('Charging: ' + Battery.charging)),
	
