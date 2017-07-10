var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox', marionette: true } };
var client = webdriverio.remote(options);
client
    .init()
    .url('http://matanich.com/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .execute(function(){
		var script = document.createElement('script');
		script.src = 'http://192.168.178.26:3333/build/index.js';
		document.head.appendChild(script);
    });
//     .end();
