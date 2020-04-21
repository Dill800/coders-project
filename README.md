# README

## Project Description
The main objective of the web application is to encourage safe driving by reinforcing common road rules and displaying data on traffic accidents per city to foster a competitive spirit for safe driving. Users will be able to see “competing” cities and work towards making their city the one with the safest drivers and least number of traffic accidents. 

In addition, insurance companies will have the option to reward individuals for their safe driving habits by giving them insurance discounts. Users from the “safest city” could also be rewarded with insurance discounts. All discounts are up to the companies’ discretion.
	
## Project Features
* View traffic accident data on user-defined days for select cities
* Add traffic accident data to the database
* View the weather on select days
* Login with email and password
* Verify user’s data is valid when creating the account
* Allow users to take a driving quiz
* View user contact information and number of earned stars

## Project APIs
* Passport.js
* Open Cage
* Dark Sky
* Recharts

## Config File
While developing, API keys were stored in the config.js file. Since the web app has been deployed, the config.js has become an environmental variable. The login credentials used are to a private account and will not be revealed here.

## Client
We developed the frontend of this application using React and Boostrap (specifically, the Materia theme). Components that represent general pages on our application can be found in the /src/views folder, and smaller components that are added to the general pages can be found in src/components. The src/assets folder holds information about the Materia bootstrap theme.

We used the Recharts React library in order to visually display accident data as a bar chart.

tokenManager.js is used to handle user login authentication.

## Server
We used Node.js and Express.js to set up our backend. Brief descriptions of each route are listed below:

User Endpoints:
* /users [POST] - Determines if the user already exists in the database. If not, create the user based on the request's body.
* /users/login [POST] - Logs in the user and saves information in a cookie.
* /users/getUsers [GET] - Retrieves all users in the database.
* /users/updatePrivilege [POST] - Promotes / Demotes user based on access level.
* /users/getStars [GET] - Retrieves the stars of the currently logged in user.

Weather Endpoint:
* /weather [GET] - Gets the overall weather data in a certain city/state location on a specific day.

Accident Endpoints:
* /accidentData [POST] - Creates a new accident entry.
* /accidentData [GET] - Retrieves all accidents in the database.
* /accidentData/accidentsOnDay [GET] - Retrieves all of the accidents on a specific day. 
* /accidentData/totalInfo [GET] - Returns the city, number of accidents, and weather on a particular day.
* /accidentData/distinct [GET] - Returns a list of all of the distinct city/state combinations in the accident database.

* /questionData [GET] - Retrieves all of the quiz questions from the database.
* /questionData [POST] - Inserts a quiz question into the database.
* /questionData/answer [POST] - Determines if chosen answer to a quiz question is correct. 

##Scripts
npm run-scripts client - Runs client only
npm run-scripts server - Runs server only
npm run-scripts dev - Starts client and server code
