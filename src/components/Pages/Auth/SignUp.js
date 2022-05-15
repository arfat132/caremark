import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assests/icons/google.svg';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { toast, ToastContainer } from 'react-toastify';


const SignUp = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser, from, navigate])

    const forgetPassword = async () => {
        if (user?.email) {
            await sendPasswordResetEmail(user?.email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        };
    };

    return (
        <section className="py-20">
            <div className="container mt-16 lg:px-36 sm:px-6">
                <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-3xl-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div className="text-center">
                                            <h4 className="text-xl font-semibold my-3 text-secondary">Sign Up</h4>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)} className="">
                                            <div>
                                                <input
                                                    placeholder="Enter Your Email"
                                                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-secondary focus:border-secondary block w-full p-2.5 mb-2"
                                                    type="email"
                                                    {...register("email", {
                                                        required: {
                                                            value: true,
                                                            message: 'Email is Required'
                                                        },
                                                        pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: 'Provide a valid Email'
                                                        }
                                                    })}
                                                />
                                                <label className="label">
                                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                </label>
                                            </div>
                                            <div className='relative'>
                                                <input
                                                    placeholder="Enter Your Password"
                                                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-secondary focus:border-secondary block w-full p-2.5 mb-2"
                                                    type={showPass ? "text" : "password"}
                                                    {...register("password", {
                                                        required: {
                                                            value: true,
                                                            message: 'Password is Required'
                                                        },
                                                        minLength: {
                                                            value: 6,
                                                            message: 'Must be 6 characters or longer'
                                                        }
                                                    })}
                                                />
                                                <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                                                <label className="label">
                                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                </label>
                                            </div>
                                            <input
                                                placeholder="Confirm Password"
                                                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-secondary focus:border-secondary block w-full p-2.5 mb-5"
                                                type="confirmPassword"
                                                {...register("confirmPassword", { min: 18, max: 99 })}
                                            />
                                            <input type="submit"
                                                className="inline-block px-6 py-3 text-white font-medium text-lg leading-tight uppercase rounded-xl shadow-md bg-gradient-to-r from-secondary to-primary hover:bg-indigo-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-2" />
                                            <div className="flex items-center mt-2 text-center ml-16">
                                                <p className="mb-0 mr-2 text-center">Already Have An Account?</p>
                                                <Link to='/signIn' className='inline-block text-secondary font-bold text-md leading-tight uppercase rounded-xl hover:underline '> Sign In</Link>

                                            </div>
                                            <label className="font-medium text-secondary text-center ml-28 mt-3"><button onClick={forgetPassword} className="text-secondary mt-3 font-semibold hover:underline">Forget Password?</button></label>
                                            <div className='flex font-bold items-center my-3'>
                                                <hr className='border-secondary h-px w-full mr-2 mt-1' />
                                                <span className='text-secondary'>or</span>
                                                <hr className='border-secondary h-px w-full ml-2 mt-1' />
                                            </div>
                                            <button onClick={() => signInWithGoogle()} className="flex items-center justify-center shadow-md bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
                                        </form>
                                        <ToastContainer></ToastContainer>
                                    </div>
                                </div>
                                <div
                                    className="lg:w-6/12 flex items-center lg:rounded-3xl-r-lg rounded-3xl-b-lg lg:rounded-3xl-bl-none mx-auto bg-gradient-to-r from-secondary to-primary"

                                >
                                    <div className=" px-4 py-6 md:pl-18 md:mx-6">
                                        <img src="" alt="" srcSet="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;