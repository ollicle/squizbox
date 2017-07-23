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

Click the exit button

## Next

- create committed dist directory and make bookmarklet accessible online somehow

## todo

- cross convert breakpoints in em/rem with pixels
- breakpoint selection and edit
- easy access to edited values (before and after perhaps)

## wishes

- Remove hard coded local urls from scripts
- reload re-generated build within initial selenium session
