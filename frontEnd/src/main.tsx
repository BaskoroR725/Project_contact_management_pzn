import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import UserRegister from './components/User/UserRegister.tsx'
import UserLogin from './components/User/UserLogin.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <Routes >
        <Route element={<Layout />} >
          <Route path='/register' element={<UserRegister />}/>
          <Route path='/login' element={<UserLogin />}/>
        </Route>
        <Route path='/dashboard' >

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
