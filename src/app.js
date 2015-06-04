var UI = require('ui');
var Vector2 = require('vector2');

var card = new UI.Window({
	fullscreen: 'false',
	scrollable: 'true',
	borderColor: 'white',
});

var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color: 'white',
  textAlign: 'center'
});

card.add(timeText);
card.show();
