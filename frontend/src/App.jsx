import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserNavBar from './components/Common/UserNavBar';
import AdminNavBar from './components/Common/AdminNavBar';
import UserHomePage from './components/User/UserHomePage';
import DonatePage from './components/User/DonatePage';
import ContactPage from './components/User/ContactPage';
import AdminHomePage from './components/Admin/AdminHomePage';
import Notification from './components/Admin/Notification';
import DeliveryPage from './components/Admin/DeliveryPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route path="/user" element={
          <div>
            <UserNavBar />
            <UserHomePage />
          </div>
        } />
        <Route path="/user/donate" element={
          <div>
            <UserNavBar />
            <DonatePage />
          </div>
        } />
        <Route path="/user/contact" element={
          <div>
            <UserNavBar />
            <ContactPage />
          </div>
        } />

        {/* Admin routes */}
        <Route path="/admin" element={
          <div>
            <AdminNavBar />
            <AdminHomePage />
          </div>
        } />
        <Route path="/admin/notification" element={
          <div>
            <AdminNavBar />
            <Notification />
          </div>
        } />
        <Route path="/admin/delivery" element={
          <div>
            <AdminNavBar />
            <DeliveryPage />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
