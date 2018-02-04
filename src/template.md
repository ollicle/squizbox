# Squizbox

*Work in progress. Here be dragons!*

## Preview and adjust CSS media width breakpoints

This bookmarklet is an experiment to test the hypothesis that better tools can help answer the _design_ decision – *at what screen width should this change?*. Use it to visually preview either side of a breakpoint simultaneously. Media queries of the same measure are collated to edit them as one.

No more designing around fixed, arbitrary, breakpoints.

## Usage

### Install bookmarklet

Drag this link to your browser bookmark bar: [squizbox][javascript:(function(){ INCLUDEJS })();]

Click the bookmarklet to inspect and edit @media min-width and max-width breakpoints used in the CSS of the current page.

### Limitations

- Only reads CSS files loaded from the same domain as the page itself

- Bookmarklets cannot be run on pages with a Content Security Policy (CSP) that disallows inline scripts. For example [GitHub Content Security Policy](https://github.com/blog/1477-content-security-policy)

- Only tested (and proved buggy in Firefox)


## Development test set-up

Beyond setting up the command line scripts as npm scripts, I’ve done very little to ensure the dev set-up runs anywhere but my Mac. Disclaimers aside, the mostly manual testing set-up uses Selenium to open a url in a Firefox window – saving several clicks by injecting the bookmarklet into the page automagically.

1. Install dependencies

	Navigate to the project directory in your terminal and fetch dependencies from npm

		npm i

2. Install selenium

		npm run selenium-install

3. Bundle script and start watcher

		npm start

4. Start webserver

	In a new console

		npm run serve

5. Start selenium server

	In another new console

		npm run selenium-start

6. Serve test page

	In another new console

		npm run serve-test

7. Run manual test script

	In a fourth console

		npm run test -- "http://localhost:5555/"

	- Firefox browser window opens,
	- loading the test page,
	- bookmarklet code is injected and executed

### Distribution build

Presuming dependencies are installed. The `dist` script builds and embeds the bookmarklet code into this README

	npm run dist

## Todo

- bug fixes
- window resizing in a mode that deselects selected breakpoints
- easy access to edited values (before and after perhaps)
- remove console logging from dist build somehow
- add visible version
- UI design

## Wishes

- reload re-generated build within initial selenium session

## Editing this document

This README is generated from [template.md](src/template.md)