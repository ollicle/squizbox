var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox', marionette: true } };
var browser = webdriverio.remote(options);
var url = process.argv[2];

browser
    .init()
    .url(url)
    .executeAsync(function(done){
    
    	//	Load script to test
		var script = document.createElement('script');
		script.src = 'http://192.168.178.26:3333/build/index.js';
		document.head.appendChild(script);
		
		//	Insert test exit button
        setTimeout(function() {
			var exit = document.createElement('button');
			exit.textContent = "Exit test";
			exit.addEventListener('click', function (){
				done();
			}, false);
            document.body.insertBefore(exit, document.body.firstChild);
        }, 300, done);
    }).end();
