import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'
import Profile from './assets/pages/Profile'
import About from './assets/pages/About'
import Header from './components/Header'
const App = () => {
  return (
    <BrowserRouter>
        <Header/> {/* this way the header will be rendered in all pages */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App