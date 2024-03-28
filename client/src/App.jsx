import { Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import useAuthCheck from './hooks/useAuthCheck';
import Library from './Components/Library/Library';
import Chat from './Components/Chat/Chat/Chat';
import MyPrompts from './Components/MyPrompts/MyPrompts/MyPrompts';
import CreatePrompts from './Components/Create/CreatePrompts/CreatePrompts';
import CreateCharacter from './Components/Create/CreateCharacter/CreateCharacter';
import Login from './Layout/Login';
import Home from './Layout/DashboardLayout';
import RequireAuth from './Components/RequiredAuth/RequireAuth';
import LandingPage from './Components/LandingPage/LandingPage';
import Main from './Layout/Main';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import VerifyOtp from './Components/VerifyOtp';
import CheckIfUserVerified from './Components/Middleware/CheckIfUserVerified';
import { router } from './Router/Router';

function App() {

  // authentication checking
  

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
