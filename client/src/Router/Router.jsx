import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/DashboardLayout";
import Library from "../Components/Library/Library";
import Chat from "../Components/Chat/Chat/Chat";
import MyPrompts from "../Components/MyPrompts/MyPrompts/MyPrompts";
import Login from "../Layout/Login";
import CreateCharacter from "../Components/Create/CreateCharacter/CreateCharacter";
import CreatePrompts from "../Components/Create/CreatePrompts/CreatePrompts";
import Dashboard from "../Components/Dashboard";
import Main from "../Layout/Main";
import LandingPage from "../Components/LandingPage/LandingPage";
import SignUp from "../Components/SignUp";
import VerifyOtp from "../Components/VerifyOtp";
import CheckIfUserVerified from "../Components/Middleware/CheckIfUserVerified";
import RequireAuth from "../Components/RequiredAuth/RequireAuth";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/verify-otp',
                element: <CheckIfUserVerified><VerifyOtp/></CheckIfUserVerified>
            },
            {
                path: '/dashboard/',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '',
                        element: <RequireAuth><Dashboard/></RequireAuth>
                    },
                    {
                        path: 'categories/:id',
                        element: <RequireAuth><Dashboard/></RequireAuth>
                    },
                    {
                        path: 'library',
                        element: <Library></Library>
                    },
                ]
            },
          
        ]
    },
 
]);