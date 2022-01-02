# Exerzo

This project is a `WebApp` made with `MERN Stack`. Here we can create, store, edit and delete exercise details of multiple users.

## Create user
First of all we have to make an user. For that we have to go to the create user page.\
Once we have created an user, we can allocate an exercise log for that particular user.

## Create Exercise Log
In this page we will be provided with a form which has a drop-down field called `Name` where we will find all the users.\
Then we can select a particular user and allocate them with an exercise along with the duration of exercise and the date on which the exercise is allocated.

## Exercise List 

Here we will get a table filled with the information that we have provided to our users.\
Alongside every user in the table, we are provided with the `Edit` and `Delete` option, through which we can edit or delete the record of a particular user.

# About the project build
This project is a `Full Stack WebApp` made with using the latest tech stack `MERN Stack`.



## Backend
This portion of the project is made by using `NodeJS`.\
Where `MongoDB Atlas` was choosen as the database which was cloud hosted on `Google Cloud Services`.\
To connect the database with backend, dependencies used are: `moongose`, `cors`, `dotenv` and `express` to use `ExpressJS`.

## Frontend

This portion of this project is made by using `ReactJS`.\
`Bootstrap` was used for styling.\
In the `Create Exercise Log` there is a field for the date where the dependency `react-datepicker` was used.\
To route between different pages, the dependency `react-router-dom` was used, to import the `BrowserRouter`.\
To connect the frontend with the backend, to get and post queries through our frontend, we used `Axios`.