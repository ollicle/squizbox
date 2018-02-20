/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

var bookmarklet = '<script src="./build/index.js" defer ></script>';

browserSync({
	files: "build/index.js",
	proxy: 'localhost:3000',
    serveStatic: ['./'],
    port: 3001,
    snippetOptions: {
        blacklist: ['**/*?'],
        rule: {
        	match: /<\/body>/i,
        	fn: function (snippet, match) {
				return bookmarklet + snippet + match;
			}
        }
    }
});
