# Ecommerce continuous project

## Install the project
### 1. Linting and formatting
What is linting and formatting: eslint check coding style and enforce style (with tool to format: prettier)
- Install `eslint`, `prettier`, `prettier ESLint` on vscode
- Set tabSize vscode to 2 [guide](https://stackoverflow.com/questions/29972396/how-can-i-customize-the-tab-to-space-conversion-factor)
- Reference: https://eslint.org/docs/latest/use/getting-started

### 2. Install the dependencies
- make sure to run node 18
- `npm install`

---

## Git flow rules
- You must not push code directly to the `main` branch

##### git commit convention
There are scenarios: 
- feature: commit related to a new feature being implemented
- bugfix: commit related to bug fix
- config: commit related to config tasks (install new packages, setup environment)
Examples of commit messaged
```
feature: upgrade Navbar component
fix: fix bug related to Navbar
config: add script to run unit test
```

##### Branch name convention
There are scenarios: 
- feature: branch related to a new feature being implemented
- bugfix: branch related to bug fix task
- config: branch related to config tasks (install new packages, setup environment)
Examples of commit messaged: must not contain spaces
```
feature/upgrade-Navbar-component
fix/bugp-related-Navbar
config/add-script-to-run-unit-test
```

1. Create a new branch from the `main` branch (check **Branch naming convention**)
2. Do your work and commit the code frequently (check **git commit convention**) -> push the branch to github
3. When you are done for a task -> create a PR from the branch you are working on to `main` branch
4. Wait for comments and approval
5. Merge the branch to `main` and discard the old branch

## Run the project
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---
# Technical details

## UI framework
- This project uses [MUI](https://mui.com/material-ui/getting-started/installation/)
- Default font is `Roboto`, which is already included in the packages
- MUI also uses [Emotion](https://emotion.sh/docs/introduction), which should be used for additional styling