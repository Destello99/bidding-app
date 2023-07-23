# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `To install dependencies`

use `npm install --legacy-peer-deps`
        OR
use `npm install --force`

Starting from NPM version 7 and onwards, they worked the algorithm to manage peer or upstream dependencies. This new algorithm installs peer dependencies as a default!

Older versions of NPM (eg 6) are more relaxed on how they handle peer dependencies so thats why you don’t see this error.

Essentially, NPM 7+ treats peer dependencies as follows:
    
install peer dependencies by default. This is not required in previous versions.
modules MUST have peer dependencies specified or it will throw an error
The flag --legacy-peer-deps applies for NPM 7+ and tells NPM to use the algorithm that handles peer dependencies from NPM version 6 and below.

### if you getting any npm error try this
1. first check if there any error to fix for that use : ` npm audit`
        if you see something like 
        {
                `# npm audit report`
                `nth-check  <2.0.1` 
                `Severity: high`
                `Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr`
        Note: error could be anything, should not be same
        }
        
2. to fix the problem use
        `npm audit fix --force`
 