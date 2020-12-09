# Express wrapper for Google Translate API

#### based on `google-translate-api-browser` by @cjrsgu

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Installation

Clone the repo:

`git clone https://github.com/hasanalibalcioglu/express-google-translate-api.git`

Install the dependencies: `npm i`

## Run the server

Run: `npm start` or `node server.js`

## Useage

The server should be accessible on `http://localhost:5000/translate`

Pass your text in the `tr` query: `http://localhost:5000/translate?tr=Merhaba`

Pass your language in the `to` query (if you don't default: en): `http://localhost:5000/translate?tr=Merhaba&to=en`

## PRs are welcome!
