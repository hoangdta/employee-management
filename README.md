# CRUD Application using Spring Boot and Angular
This is a CRUD (Create, Read, Update, Delete) application built with Spring Boot for the backend and Angular for the frontend.

## Features
Create, read, update, and delete records in the database.
Angular frontend communicates with Spring Boot backend via RESTful APIs.

## Technologies Used
- Backend:
  + Spring Boot
  + Spring Data JPA
  + Spring Web
  + MySQL (optional)
- Frontend:
  + Angular
  + Angular Material (optional)

## Prerequisites
- JDK 8 or higher installed
- Node.js and npm installed
- MySQL database server installed and running
## Getting Started
1. Clone the repository:
```
git clone <repository-url>
```
3. Backend Setup:
Navigate to _server_ directory.
Open src/main/resources/application.properties and configure the database connection properties.
Run the Spring Boot application.
4. Frontend Setup:
Navigate to _client_ directory.
Install dependencies:
```
npm install
```
Run the Angular application:
```
ng serve
```