# Squizbox

## Why?

No reason - doesn’t do anything yet.
Won’t work for you without messing with urls in scripts.

## Development set-up

Note: when updating selenium drivers update the browsers alongside them

1. Install dependencies

		npm i

2. Install selenium

		npm run selenium-install

3. Bundle script and start watcher

		npm start

4. Start webserver

		npm run serve

5. Start selenium server

	In a new console

		npm run selenium-start


## Test run script

In a third console

	npm run test -- "http://www.example.com"

## todo

- shift the breakpoint extraction to a reduce over the stylesheets of both iframes

- preserving references to the media rules for editing

- breakpoint selection and edit

	When both iframes ready

	for each in array of media rules

	build array of matching rules in each of the iframes

	associate these by reference accessible to boundary object

	write an edit function that is passed references to these rules via the selected boundary

	bind selected width to edit media rules

- cross convert breakpoints in em/rem with pixels

- create committed dist directory and make bookmarklet accessible online somehow

- easy access to edited values (before and after perhaps)

## wishes

- Remove hard coded local urls from scripts
- reload re-generated build within initial selenium session
