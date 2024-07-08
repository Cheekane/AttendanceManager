# Attendance Manager

## Header - displays userId, dropdown list, login or logout.
## Dashboard - displays and creates groups.

![Screenshot 2024-07-07 200002](https://github.com/Cheekane/AttendanceManager/assets/96549640/6d27c7f1-5958-4171-b934-281a099584d7)

## Displays attendees in selected group with attendee edit and search features.

![Screenshot 2024-07-07 195954](https://github.com/Cheekane/AttendanceManager/assets/96549640/c2afbf8e-672f-496e-9941-d413d660b6f1)

This project was created with: Express, node.js, MySQL and React


## Backend

### Uses MySQL and node.js

contains the server with CRUD operations to modify the sql_attendance database in MySQL.

## client

### Uses React and express

contains the React app and uses express to request functions on UI events

## To run properly

install Node.js package manager (npm) and MySQL (database server)

need .env file with the host, user, password and database environment variables

also use "npm install" to get the node_modules

then also install the proper JSON packages:
- mysql2
- dotenv
- express
- cors (?) not sure how this works exactly in the project
- react-router-dom
- axios
- nodemon (recommended)
- scss
