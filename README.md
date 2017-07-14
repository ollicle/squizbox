# Squizbox

## Why?

No reason - doesn’t do anything yet.
Won’t work for you without messing with urls in scripts.

## Getting started

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


## todo

- generate bookmarklet script and page to install it
- write the bookmarklet script

## wishes

- Remove hard coded local url from scripts
- reload re-generated build in open selenium session
