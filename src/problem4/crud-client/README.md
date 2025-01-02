# CRUD Client Application

The application allows you to add, edit, delete, and view users.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-directory>/src/problem4/crud-client
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

## Configuration

Make sure the backend server is running and accessible. Update the API endpoint in the `userService.js` file if necessary.

## Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5713`.

## Building for Production

To build the application for production: 

```sh
npm run build
```

## Project Structure

- `src/components`: Vue components
- `src/services`: API service files
- `src/views`: Vue views
- `public`: Static assets

## API Endpoints

Ensure the backend server is running and accessible. The following endpoints are used:

- `GET /users?page={page}&limit={limit}`: Fetch paginated users
- `POST /users`: Create a new user
- `PUT /users/:id`: Update a user
- `DELETE /users/:id`: Delete a user

## Author

Ho Dang Nguyen (hdnguyendev)