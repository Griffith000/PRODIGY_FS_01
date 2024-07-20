import React, { useEffect,useState } from 'react'
import useTypewriter from "react-typewriter-hook"

const Home = () => {
  // function MagicWriter(word) {
  //   const typing = useTypewriter(word)
  //   return typing
  // }
  // const words = MagicWriter("Welcome to the Authentication hub!")
  const [index, setIndex] = useState(0);
  const [magicWord, setMagicWord] = useState("");
  const words = "Welcome to the Authentication hub! ";

  useEffect(() => {
    if (index < words.length) {
      const timeoutId = setTimeout(() => {
        setMagicWord((prev) => prev + words.charAt(index));
        setIndex(index + 1);
      }, 150); // Speed of typing
      return () => clearTimeout(timeoutId);
    } else {
      // Reset to start typing again after a delay
      setTimeout(() => {
        setMagicWord("");
        setIndex(0);
      }, 500); // Delay before starting over
    }
  }, [index, words]);
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
    <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
       <span>{magicWord}<span className="cursor-blink text-slate-600">|</span></span>
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