# User authentication system

This full-stack web application is developed using the MERN stack, which includes MongoDB, Express, React, and Node.js. It features a robust authentication system allowing users to sign up, log in, and log out. Access to certain routes is restricted, available only to authenticated users through private routes.

## Features
- **Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Private routes**: Access to certain routes is restricted to authenticated users.
- **State Management**:Utilized Redux Toolkit for efficient state handling.
- **Document uploads**: Integrated Firebase Storage for managing user document uploads.
- **Sorting and Filtering**: Users can sort and filter products via categories, making it easy to find exactly what they need.
- **Google OAuth**: Added as an alternative sign-in method for users.
  
## Tech Stack

**Client:** React, Redux, TailwindCSS , Vite

**Server:** Node, Express ,MongoDb

## Environment Variables

To configure the environment variables for the project, follow these steps:

1. Create a `.env` file in the root directory of the project and in the root of the `client` folder.
2. Add the following environment variables to the `.env` file:

### ./client
`VITE_FIREBASE_API_KEY`

### ./

`DATABASE_URL`
`JWT_SECRET`

## Visit demo : https://mern-auth-eb4g.onrender.com
