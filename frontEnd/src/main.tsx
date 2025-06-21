import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import UserRegister from './components/User/UserRegister.tsx'
import UserLogin from './components/User/UserLogin.tsx'
import DashboardLayout from './components/DashboardLayout.tsx'
import UserProfile from './components/User/UserProfile.tsx'
import UserLogout from './components/User/UserLogout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <Routes >
        <Route element={<Layout />} >
          <Route path='/register' element={<UserRegister />}/>
          <Route path='/login' element={<UserLogin />}/>
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='contacts' element={<div>contacts</div>} />
          <Route path='users/profile' element={<UserProfile/>} />
          <Route path='users/logout' element={<UserLogout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
