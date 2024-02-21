# Attendance Manager

## Presents data of attendees entered into form.

![Screenshot 2024-02-21 162420](https://github.com/Cheekane/AttendanceManager/assets/96549640/b61a589d-de0e-41f7-a76d-1bab9c555d1c)

## Searchbar feature to find specific information. (name)

![Screenshot 2024-02-21 162948](https://github.com/Cheekane/AttendanceManager/assets/96549640/46970708-67b4-44e9-b9c6-8bda84bd6363)

## Information modification page to update or delete information.

![Screenshot 2024-02-21 163000](https://github.com/Cheekane/AttendanceManager/assets/96549640/5e1f0da3-30e3-46c0-8aa8-5ce232502a96)

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