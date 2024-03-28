import {
    Card,
    CardBody,
    CardFooter,
    Input,
    Button,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/Logo/logo.png'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { libraryUrl } from "../configs/constants";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../redux-rtk/features/auth/authApi";
import { useEffect } from "react";
import LoadingIcon from "../Components/Shared/LoadingIcon/LoadingIcon";
import { cx } from "../hooks/helpers";
import { Link } from 'react-router-dom';
const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export default function Login() {

    // globals
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/dashboard';

    const auth = useSelector((state) => state.auth);
    const [login, { isLoading, isSuccess }] = useLoginMutation();

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) });

    // handle login
    const onSubmit = async (data) => {
        const res = await login(data);
        console.log(res);
        if (res.error) {
            // if the error is user not verified then redirect to verify otp page
            if (res?.error?.data?.message === 'User is not verified!') {
                navigate('/verify-otp?email=' + data.email)
            }
        }
    };

    // if api call success then redirect to dashboard
    useEffect(() => {
        if (isSuccess) {
            navigate(from)
        }
    }, [isSuccess, navigate, from])

    // if authenticated then redirect to dashboard
    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(from)
        }
    }, [auth.isAuthenticated, navigate, from])

    return (
        <div className="w-screen absolute top-1/4">
            <div className="w-1/4 mx-auto flex items-center gap-3">
                {/* <img className="w-16 h-16" src={logo} alt="" /> */}
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Card className="w-1/3 mx-auto">
                    <h1 className="p-10 text-[18px] font-semibold text-2xl text-center text-red-800">Login</h1>
                    <CardBody className="flex flex-col gap-4 w-5/6 m-auto pt-0">

                        <table>
                            <tr className="relative">
                        
                                <td>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (<>
                                            <Input
                                                type="email"
                                                color="brown"
                                                size="regular"
                                                outline={false}
                                                label="Email"
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />
                                            {errors.email && (
                                                <span className="text-xs text-red-500 absolute -bottom-5 right-0">
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </>
                                        )}
                                    />
                                </td>
                            </tr>
                            <br />
                            <tr className="relative">
                           
                                <td>
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field }) => (<>
                                            <Input
                                                type="password"
                                                color="brown"
                                                size="regular"
                                                outline={false}
                                                label="Password"
                                                onChange={(e) => field.onChange(e.target.value)}
                                            />

                                            {errors.password && (
                                                <span className="text-xs text-red-500 absolute -bottom-5 right-0">
                                                    {errors.password.message}
                                                </span>
                                            )}
                                        </>
                                        )}
                                    />
                                </td>
                            </tr>
                        </table>

                    </CardBody>

                    <CardFooter className="pt-0 mx-auto">
                        <Button
                            className={cx(
                                isLoading && 'flex items-center'
                            )}
                            variant="black"
                            fullWidth
                            type="submit"
                        >
                            {isLoading && <LoadingIcon />}
                            Login
                        </Button>

                        
                        <p className='text-sm mt-5'>
                            Don't have any account? <Link to="/signup" className="text-red-800">Sign Up</Link>
                        </p>
                    </CardFooter>

                </Card>
            </form>
        </div>
    );
}