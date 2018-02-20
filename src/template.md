# Squizbox

*Work in progress. Here be dragons!*

## Preview and adjust CSS media width breakpoints

This bookmarklet is an experiment to test the hypothesis that better tools can help answer the _design_ decision – *at what screen width should this change?*. Use it to visually preview either side of a breakpoint simultaneously. Media queries of the same measure are collated to edit them as one.

No more designing around fixed, arbitrary, breakpoints.

## Usage

### Install bookmarklet

Drag this link to your browser bookmark bar: <a href="javascript:(function(){ INCLUDEJS })()">squizbox</a>

(If you don’t see a link above try visiting [the project site](https://ollicle.github.io/squizbox/))

Click the bookmarklet to inspect and edit @media min-width and max-width breakpoints used in the CSS of the current page.

### Limitations

- Only reads CSS files loaded from the same domain as the page itself

- Bookmarklets cannot be run on pages with a Content Security Policy (CSP) that disallows inline scripts. For example [GitHub Content Security Policy](https://github.com/blog/1477-content-security-policy)

- Only tested (and proved buggy in Firefox)


## Development test set-up

Beyond setting up the command line scripts as npm scripts, I’ve done very little to ensure the dev set-up runs anywhere but my Mac.

1. Install dependencies

	Navigate to the project directory in your terminal and fetch dependencies from npm

		npm i

2. Bundle script and start watcher

		npm start

3. Start webserver

	Serves the test page `./test/index.html` on <http://localhost:3000> In a new console:

		npm run serve

4. Start browser-sync proxy server

	Loads test page with bookmarklet `./build/index.js` injected <http://localhost:3001>. In another new console:

		npm run proxy

5. Start Cypress test console

	In a third console:

		npm run cypress:open

### Distribution build

Presuming dependencies are installed. The `dist` script builds and embeds the bookmarklet code `./build/bookmark.js` into this README

	npm run dist

## Todo

- bug fixes
- window resizing in a mode that deselects selected breakpoints
- easy access to edited values (before and after perhaps)
- remove console logging from dist build somehow
- add visible version
- UI design

## Editing this document

This README is generated from [template.md](src/template.md)
