var UI = require('ui');
//var Vector2 = require('vector2');
var Clock = require('clock');
var Battery = navigator.battery || navigator.webkitBattery ||
		navigator.mozBattery || navigator.msBattery;

var card = new UI.Card({
	title: '',
	body: '',
});

var cl1 = Clock.weekday.hour;
var cl2 = Clock.weekday.minutes;
card.title(cl2);
card.body(cl1);
card.show();
	//text = Battery.level;
//console.log('Level: ' + Math.floor(Battery.level * 100) + '%')),
  //console.log('Charging: ' + Battery.charging)),
	
