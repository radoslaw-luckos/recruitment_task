# Recruitment task - Radosław Łuckoś

This project was created for recruitment purposes. Frontend created with Create React App with Redux Toolkit and TailwindCSS. 
Backedend uses express.js and MongoDB. Test are written using jest, cypress.io and React Testing Library.

## Run the app

To run the app (frontend + backend) to work properly you have to:

### 1. Run the frontend

Navigate to the client folder from the project's root folder using `cd client` command.
Then you need to install all dependencies using `npm i` command.
Then you need to run `npm start` script to run the frontend of the app.

### 2.Run the backend

Navigate to the server folder from the project's root folder using `cd server` command.
Then you need to install all dependencies using `npm i` command.
Then you need to run `npm run start` script to run the backend of the app.

## Test the app

To run the tests of the app (frontend + backend) you have to:

### 1. Frontend

Navigate to the client folder from the project's  root folder using `cd client` command.
Then you need to run `npm test` script to run the frontend tests of the app.

To run e2e tests you need to use `npx cypress open` command. 
Then, after the Cypress app will open, select e2e testing option and choose a browser of your choice.
Then selecting the test from e2e specs list will run selected test.

**IMPORTANT! To run cypress tests you need to run both app parts first.**

### 2. Backend

Navigate to the server folder from the project's root folder using `cd server` command.
Then you need to run `npm run test` script to run the backend tests of the app.




