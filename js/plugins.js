// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Typewriter plugin for welcome screen
const app = document.querySelector('#typewriter');

const typewriter = new Typewriter(app, {
  loop: false,
  cursor: '_',
  delay: 85
});

typewriter
  .pauseFor(800)
  .typeString("How might I address you?")
  .callFunction(() => {
    document.querySelector('.Typewriter__cursor')?.classList.add('d-none');
    document.querySelector('#welcomeInput')?.classList.remove('invisible');
    document.querySelector('#welcomeInput')?.classList.add('fade-in');
  })
  .start();