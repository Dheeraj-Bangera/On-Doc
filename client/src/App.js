import './styles/app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import { Protected, Public, Admin } from './middleware/route';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import { SocketContextProvider } from './context/socketProvider';
import { ChatContextProvider } from './context/ChatContext';

const Home = lazy(() => import('./pages/Home'));
const Prediction = lazy(() => import('./pages/Prediction'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Appointments = lazy(() => import('./pages/Appointments'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Profile = lazy(() => import('./pages/Profile'));
const Emergency = lazy(() => import('./pages/Emergency'));
const Notifications = lazy(() => import('./pages/Notifications'));
const ApplyDoctor = lazy(() => import('./pages/ApplyDoctor'));
const Error = lazy(() => import('./pages/Error'));
const Bmical = lazy(() => import('./components/Bmical'));
const News = lazy(() => import('./components/blog/Blog'));
const Chats = lazy(() => import('./pages/Chats'));

function App() {
  return (
    <ChatContextProvider>
      <SocketContextProvider>
        <Router>
          <Toaster />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />{' '}
              <Route
                path="/register"
                element={
                  <Public>
                    <Register />
                  </Public>
                }
              />{' '}
              <Route path="/" element={<Home />} />{' '}
              <Route path="/doctors" element={<Doctors />} />{' '}
              <Route
                path="/prediction"
                element={
                  <Protected>
                    <Prediction />
                  </Protected>
                }
              />
              <Route
                path="/appointments"
                element={
                  <Protected>
                    <Appointments />
                  </Protected>
                }
              />{' '}
              <Route
                path="/notifications"
                element={
                  <Protected>
                    <Notifications />
                  </Protected>
                }
              />{' '}
              <Route
                path="/applyfordoctor"
                element={
                  <Protected>
                    <ApplyDoctor />
                  </Protected>
                }
              />{' '}
              <Route
                path="/profile"
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />{' '}
              <Route
                path="/emergency"
                element={
                  <public>
                    <Emergency />
                  </public>
                }
              />{' '}
              <Route
                path="/dashboard/users"
                element={
                  <Admin>
                    <Dashboard type={'users'} />{' '}
                  </Admin>
                }
              />{' '}
              <Route
                path="/dashboard/doctors"
                element={
                  <Admin>
                    <Dashboard type={'doctors'} />{' '}
                  </Admin>
                }
              />{' '}
              <Route
                path="/dashboard/appointments"
                element={
                  <Protected>
                    <Dashboard type={'appointments'} />{' '}
                  </Protected>
                }
              />{' '}
              <Route
                path="/dashboard/applications"
                element={
                  <Protected>
                    <Dashboard type={'applications'} />{' '}
                  </Protected>
                }
              />{' '}
              <Route
                path="/bmi"
                element={
                  <Protected>
                    <Bmical />
                  </Protected>
                }
              />{' '}
              <Route
                path="/news"
                element={
                  <Protected>
                    <News />
                  </Protected>
                }
              />{' '}
              <Route
                path="/chats"
                element={
                  <Protected>
                    <Chats />
                  </Protected>
                }
              />
              <Route path="*" element={<Error />} />{' '}
            </Routes>{' '}
          </Suspense>
        </Router>
      </SocketContextProvider>
    </ChatContextProvider>
  );
}

export default App;
