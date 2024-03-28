import React, { useEffect } from 'react';
import { useCheckIfUserVerifiedQuery } from '../../redux-rtk/features/auth/authApi';
import LoadingIcon from '../Shared/LoadingIcon/LoadingIcon';
import { LoaderIcon } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckIfUserVerified = ({ children }) => {

    // get email from query params and check if user is verified or not, if not then redirect to verify otp page else redirect to login page
    const email = new URLSearchParams(window.location.search).get('email')
    const { data, error, isLoading } = useCheckIfUserVerifiedQuery({ email })
    const navigate = useNavigate()
    useEffect(() => {
        console.log(data)

        if (data?.data?.isVerified) {
            window.location.href = '/login'
        }

        if(error){
            toast.error(error?.data?.message)
            navigate('/login')
        }
        
        
   

    }, [data,error])

    // return children if user is not verified
    return (
        isLoading ? <LoadingIcon /> : children
    )

};

export default CheckIfUserVerified;