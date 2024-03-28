import { Button, Card, CardBody, CardFooter, Input } from '@material-tailwind/react';
import React from 'react';
import { useResendOtpMutation, useVerifyOtpMutation } from '../redux-rtk/features/auth/authApi';
import { cx } from "../hooks/helpers";
import LoadingIcon from "../Components/Shared/LoadingIcon/LoadingIcon";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    // get email from query params
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const email = params.get('email');
    const [resendTimer, setResendTimer] = React.useState(60)
    const [resendButton, setResendButton] = React.useState(true)
    const [otp, setOtp] = React.useState(null);
    const navigate = useNavigate();
    const [useverifyOtp, { isLoading, isSuccess }] = useVerifyOtpMutation();
    const [useResendOtp, { isLoading: resendLoading, isSuccess: resendSuccess }] = useResendOtpMutation();


    const resendOtp = async () => {
        // console.log(email)
        // resend otp api call
        const resendres = await useResendOtp({ email });

        // if success then set the timer
        console.log(resendres)
        if (resendres?.data?.success) {
            // set a timer for 60 seconds and disable the button
            setResendButton(false)
            const interval = setInterval(() => {
                setResendTimer((prev) => prev - 1)
            }, 1000)
            setTimeout(() => {
                clearInterval(interval)
                setResendTimer(60)
                setResendButton(true)
            }, 60000)
        }
  

    }

    const verifyOtp = (data) => {
        if (!otp) {
            toast.error('Please enter OTP')
            return
        }
        console.log(otp)
        console.log(email)
        useverifyOtp({ otp, email })

        // signup(data)
    };

    // redirect to dashboard if otp is verified
    if (isSuccess) {
        navigate('/login')
    }
    // if there is no email in query params then redirect to login page
    if (!email) {
        window.location.href = '/login'
    }

  


    return (
        <div className='flex items-center justify-center mt-24'>
            <Card className="w-1/3 mx-auto">
                <h1 className="p-10 text-[18px] font-semibold text-2xl text-center text-red-800">Verify Your Account</h1>
                <CardBody className="flex flex-col gap-4 w-5/6 m-auto pt-0">

                    <table>
                        <tbody>
                            <tr className="relative">
                                <td>

                                    <Input
                                        type="number"
                                        min={0}
                                        maxLength={6}
                                        color="brown"
                                        size="lg"
                                        outline="false"
                                        label="OTP"
                                        onChange={(e) => setOtp(e.target.value)}
                                    />

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </CardBody>

                <CardFooter className="pt-0 mx-auto">
                    <Button
                        onClick={verifyOtp}
                        className={cx(
                            isLoading && 'flex items-center'
                        )}
                        variant="filled"
                        fullWidth
                        type="submit"
                    >
                        {isLoading && <LoadingIcon />}
                        Verify
                    </Button>
                </CardFooter>
                {/* add resend otp button with a timer */}
                <div className="p-4">
                    <p className='text-sm text-center'>If you don't receive the otp <button onClick={resendOtp} className={`btn py-1 px-2  text-white rounded ${!resendButton ? 'bg-gray-600' : 'bg-red-600'}`}>
                        {
                            resendButton ? 'Resend' : `Resend in  ${resendTimer}`
                        }
                    </button></p>
                </div>
            </Card>
        </div>
    );
};

export default VerifyOtp;