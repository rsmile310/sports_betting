import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Account from './Pages/Account'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Leagues from './Pages/Leagues'
import Login from './Pages/Login'
import OnBoarding from './Pages/OnBoarding'
import Stats from './Pages/Stats'
import Subscribe from './Pages/Subscribe'
import Tutorial from './Pages/Tutorial'

const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account' element={<Account />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/leagues' element={<Leagues />} />
                <Route path='/login' element={<Login />} />
                <Route path='/statistics' element={<Stats />} />
                <Route path='/tutorials' element={<Tutorial />} />
                <Route path='/subscribe' element={<Subscribe />} />
                <Route path='/onboarding' element={<OnBoarding />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages
