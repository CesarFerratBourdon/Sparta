# App-Sparta

A React.js app to calculate betting dividends
made as a code assignment for Sparta, Stockholm.
Please see PDF for requirements
Please visit: http://app-sparta.herokuapp.com/

## Tech stack

* Bootstrapped with Create-React-App
* React.js
* ES6
* Yarn
* Material-ui
* Jasmine

## Installation

At project root folder run

### `yarn install`

Be sure to have yarn installed globally

### `yarn run`

to generate Javascript bundle

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Test

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

## Imporvements to make

* Use Proptypes to validate data type input
* Use .map to generate many similar components (menus etc...)
* Stop doing in-line CSS and have a special folder
* Refactor the big function in utilies.js. Cut it into 2 or 3 smaller function for less responsability and more flexibility
* create a JSON parser to receive the betting datas from 3rd party APIs. (right now datas are hardcodede in data.json)
* Do some more testing with Jasmine
* Learn and use Selenium for UI testing
