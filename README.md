# Memories
A course project of multi user social media application. Users can post blogs, comment blogs and like blogs in Memories.

## Techniques
- NodeJS
- Express
- MongoDB (MongoDB Atlas)
- React
- Redux
- Heroku
- Material-UI

## Background and Features
The application is built with MERN tech stack. The front-end is based on React and utilized Redux to manage states and async requests. The backend system is based on Express and NodeJS. To make the system easier to deploy, this system used MongoDB Atlas as the database. The app supports features including:
- Registration
- Login/Logout
- JWT authentication
- Google OAuth API authentication
- Post blogs
- Comment blogs
- Delte blogs
- Like blogs
- Pagination

## Development Environment Setup 
- Client side:
```cd client```
```npm install```
```npm start```
- Server side:
```cd server```
```npm install```
```npm start```
- Database:
Modifiy the .env to add MongoDB Atlas Keys.

## TODO
- [x] Set up Node environment.
- [x] Build front-end using React.
- [x] Build back-end with Express and Node.
- [x] Set up MongoDB Atlas as database.
- [x] Desgin data models for users and posts.
- [x] Integrate Redux to manage front-end states and async requests. 
- [x] Develop login and registration APIs and logic. 
- [x] Integrate Google OAtuh API for easier registration and login for users.
- [x] Implement JWT authentication.
- [x] Create pagination for blogs, lower the load of database.
- [x] Improve the UI with Material_UI.
- [x] Implement liking blogs, delete blogs with Express APIs.
- [x] Achieve blogs comment feature.
- [x] Deploy to the Heroku.
- [ ] Debug on Heroku.
- [ ] Add demos for the application on github.
