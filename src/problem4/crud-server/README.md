# CRUD Server

This is a simple CRUD server built with Express and TypeScript.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Configuration

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-directory>/src/problem4/crud-server
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a  file in the  directory and add any necessary environment variables. For example:

    ```sh
    SERVER_PORT=9999
    ```

## Running the Application

1. To start the server in development mode with hot-reloading:

    ```sh
    npm run dev
    ```

2. To build the project:

    ```sh
    npm run build
    ```

3. To start the server in production mode:

    ```sh
    npm start
    ```

The server will be running at `http://localhost:9999`.

## API Endpoints

- `GET /api/users` - Retrieve a list of users with pagination
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Retrieve a specific user by ID
- `PUT /api/users/:id` - Update a specific user by ID
- `DELETE /api/users/:id` - Delete a specific user by ID

## Project Structure

-  Entry point of the application
-  Controller functions for user operations
-  User model interface
-  API routes for user operations
-  Utility functions and mock data

## Author

Ho Dang Nguyen (hdnguyendev)