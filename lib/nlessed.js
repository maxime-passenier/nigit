var blessed = require('blessed');


// Create a screen object.
var screen = blessed.screen({
  smartCSR: true
});

screen.title = 'you just got nigged';

// Create a box perfectly centered horizontally and vertically.
var box = blessed.box({
  top: 'top',
  left: 'left',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  border: {
    type: 'line'
  }
});
screen.append(box);
box.setText('this is the policy: kiss my ass');
setTimeout(function(){
	box.setText('kiss my ass big time');
}, 1000);


// If box is focused, handle `enter`/`return` and give us some more content.
box.key('enter', function(ch, key) {
  box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();
