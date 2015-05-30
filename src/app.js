var UI = require('ui');
//var Vector2 = require('vector2');


//var wind = new UI.Window();


var Battery = navigator.battery || navigator.webkitBattery ||
		navigator.mozBattery || navigator.msBattery;


var card = UI.Card(	
	console.log('Level: ' + Math.floor(Battery.level * 100) + '%');
  console.log('Charging: ' + Battery.charging);
)

card.show();

wind.on('show', function() {
	
wind.show();
