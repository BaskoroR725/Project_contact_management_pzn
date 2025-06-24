import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout.tsx';
import UserRegister from './components/User/UserRegister.tsx';
import UserLogin from './components/User/UserLogin.tsx';
import DashboardLayout from './components/DashboardLayout.tsx';
import UserProfile from './components/User/UserProfile.tsx';
import UserLogout from './components/User/UserLogout.tsx';
import ContactCreate from './components/Contact/ContactCreate.tsx';
import ContactList from './components/Contact/ContactList.tsx';
import ContactEdit from './components/Contact/ContactEdit.tsx';
import ContactDetail from './components/Contact/ContactDetail.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='users'>
            <Route path='profile' element={<UserProfile />} />
            <Route path='logout' element={<UserLogout />} />
          </Route>

          <Route path='contacts'>
            <Route index element={<ContactList />} />
            <Route path='create' element={<ContactCreate />} />
            <Route path=':id' element={<ContactDetail />} />
            <Route path=':id/edit' element={<ContactEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
