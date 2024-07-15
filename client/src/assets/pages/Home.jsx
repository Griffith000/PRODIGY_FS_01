import React from 'react'

const Home = () => {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
    <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
       Welcome to the Authentication Hub!
    </h1>
    <p className='mb-4 text-slate-700'>
    This full-stack web application is developed with the MERN stack, incorporating MongoDB, Express, React, and Node.js, and includes Redux Toolkit for state management. It features a robust authentication system allowing users to sign up, log in, and log out. Access to certain routes is restricted, available only to authenticated users through private routes.
    </p>
    <p className='mb-4 text-slate-700'>
    The front-end is built with React, utilizing React Router for client-side routing and Redux Toolkit for enhanced state management. The back-end is crafted using Node.js and Express, with MongoDB as the database for securely storing user data. Authentication is implemented using JSON Web Tokens (JWT) to secure user sessions and protect private routes. A specific private route is dedicated to ensuring user profile information is accessible solely to authenticated users, bolstering privacy and security. 
    </p>
    <p className='mb-4 text-slate-700'>
    This application serves as a foundational template for developers aiming to create full-stack web applications with authentication, state management, and secure access to private routes, allowing for customization and expansion to suit specific project needs.
    </p>
  </div>
  )
}

export default Home