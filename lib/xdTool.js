// Generated by CoffeeScript 1.6.3
var cb, makeConnect;

makeConnect = {
  common: {
    url: '',
    readstate: '',
    complete: function() {
      return console.log('loaded');
    }
  },
  init: function(query) {
    var head, script;
    if (query) {
      this.common['url'] = this.common['url'] + '?' + query + '=' + query + "callback=cb";
    } else {
      this.common['url'] = this.common['url'];
    }
    head = document.getElementsByTagName('head')[0];
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.onreadystatechange = function() {
      this.common['readstate'] = this.readyState;
      return console.log(this.common['readstate']);
    };
    script.onload = function() {
      return this.common[complete];
    };
    script.src = this.common['url'];
    head.appendChild(script);
  }
};

cb = function(data) {
  console.log(data);
};