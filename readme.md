# React Issues Finder

Simple react application to search for issues on React's github repo (https://github.com/facebook/react/issues)

## Installation

To install all packages run `npm install`
Then build the application by running `npm run build`

## Running the Application

On your terminal run: `npm run start`
This will open a browser on `http://localhost:8080`

Once it is finished, you can start searching for issues.

## Other Scripts

`npm run eslint`
This script will run and point out all linter related issues.

`npm run eslint:fix`
This script will run and fix all fixable linter related issues.

## Errors

Github API provides a low API Rate limit for non authenticated users, you should expect to see this kind of errors on the application, don't worry you should be able to use it again in a couple of seconds.
