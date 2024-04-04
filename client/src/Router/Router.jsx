import { createBrowserRouter } from "react-router-dom";
import Login from "../Layout/Login";
import Dashboard from "../Components/Dashboard";
import Main from "../Layout/Main";
import LandingPage from "../Components/LandingPage/LandingPage";
import SignUp from "../Components/SignUp";
import VerifyOtp from "../Components/VerifyOtp";
import CheckIfUserVerified from "../Components/Middleware/CheckIfUserVerified";
import RequireAuth from "../Components/RequiredAuth/RequireAuth";
import DashboardLayout from "../Layout/DashboardLayout";
import Rankings from "../Components/Rankings/Rankings";
import AddNewChallenge from "../Components/AddNewChallenge/AddNewChallenge";
import Resources from "../Components/Resources/Resources";

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
                path: '/resources',
                element: <Resources />
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
                        path: 'add-new-challenge',
                        element: <RequireAuth><AddNewChallenge/></RequireAuth>
                    },
                ]
            },
            {
                path: '/dashboard/rankings/',
                element: <RequireAuth><Rankings/></RequireAuth>
            },
          
        ]
    },
 
]);