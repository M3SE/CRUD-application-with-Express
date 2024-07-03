# CRUD-application-with-Express

Objective:
The objective of this assignment is to create a simple CRUD (Create, Read, Update, Delete) application using Express. This will involve setting up an Express server that can handle basic database operations without a database, using an in-memory array as the data store.

Assignment Tasks:

Initialize a New Express Project:

Create a new directory for your project and navigate into it.
Run the command to initialize a new Node.js project, creating a package.json file.
Install Express using npm.
Create the Express Server File:

In your project directory, create a file named app.js.
Set up your Express server in this file.
Implement CRUD Operations:

Create a Data Store: Initialize an empty array to store items (e.g., books, articles, users).
Create Operation: Set up a POST route that adds a new item to the array. Ensure each item has a unique identifier.
Read Operation: Set up a GET route to list all items in the array. Also, include a GET route to retrieve a single item by its identifier.
Update Operation: Set up a PUT route to modify an existing item based on its identifier. Ensure the request can handle partial updates.
Delete Operation: Set up a DELETE route that removes an item from the array based on its identifier.
Add Middleware for Handling JSON:

Use the express.json() middleware to parse JSON request bodies. This is necessary for processing POST and PUT requests that contain JSON data.
Error Handling:

Implement error handling for cases where an item can't be found or the request data is invalid.
Testing the Application:

Test your CRUD operations using a tool like Postman or CURL from the command line. Ensure that you can successfully create, read, update, and delete items.