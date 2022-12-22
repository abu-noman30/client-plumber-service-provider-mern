import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Login = () => {
	const { loading, setLoading, methodSignIn, methodGoogleSignIn, methodSignOut } = useContext(FbaseAuthContext);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || '/';
	console.log(from);

	// console.log(loading);

	if (loading) {
		return (
			// Spinner component
			<div className='w-1/2 mx-auto h-[28rem] my-auto flex items-center justify-center'>
				<span className=''>
					<ClockLoader color='#777777' />
				</span>
			</div>
		);
	}

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		// Firebase Auth methods---------------------
		//  for sign in user with email and password
		methodSignIn(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				form.reset();
				setError('');
				setLoading(false);
				console.log(user);
				// ...
				const authoriseUser = {
					email: user.email,
					uid: user.uid
				};
				fetchJWT(authoriseUser);
				// ...
				if (user && user.uid) {
					if (from === '/' || from === '/home') {
						toast.success('Login Successful');
						navigate('/home');
					} else {
						toast.success('Login Successful');
						navigate(from, { replace: true });
					}
				} else {
					handlerOnLogout();
					setLoading(false);
				}
			})

			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setLoading(false);

				console.error(error);
				// ..
			});
	};

	//  for signing in with google------------
	const handlerGoogleSignIn = () => {
		methodGoogleSignIn()
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const user = result.user;
				console.log(user);
				// ...
				// ...
				const authoriseUser = {
					email: user.email,
					uid: user.uid
				};
				fetchJWT(authoriseUser);
				// ...
				if (user && user.uid) {
					if (from === '/' || from === '/home') {
						// toast.success('Login Successful');
						navigate('/home');
					} else {
						toast.success('Login Successful');
						navigate(from, { replace: true });
					}
				} else {
					handlerOnLogout();
				}
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				console.error(error);
				// ...
			});
	};

	// User logout
	const handlerOnLogout = () => {
		methodSignOut()
			.then(() => {
				// Sign-out successful.
				localStorage.removeItem('jwtToken');
			})
			.catch((error) => {
				// An error happened.
			});
	};

	// Middleware(Authentication)-JWT(Token)

	const fetchJWT = async (authoriseUser) => {
		const res = await fetch('https://server-plumboy-service.vercel.app/jwt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(authoriseUser)
		});
		const data = await res.json();
		console.log(data);

		localStorage.setItem('jwtToken', data.accessToken);
		try {
		} catch (error) {
			console.error(error);
		}
	};
	// ----------------------------------------
	return (
		<>
			<Helmet>
				<title>Login - plumBoy</title>
			</Helmet>
			{/* Login Container */}
			<div className='login-container -mt-20 bg-gradient-to-l from-gray-900 to-gray-300'>
				<div className='flex flex-col items-center justify-center space-y-10 py-20 px-4 sm:px-6 lg:px-8 bg-[url(https://i.ibb.co/bdnJtg1/Plumbers-in-Wirral.jpg)] bg-no-repeat bg-cover mix-blend-overlay bg-fixed'>
					<div>
						<h1 className='mt-6 text-center text-5xl italic underline font-extrabold text-blue-700 pt-10'>Sign in</h1>
						<p className='mt-4 text-center text-md font-bold text-gray-700'>
							Or,{' '}
							<Link to='/register' className='font-medium text-gray-800 border-b border-indigo-600 italic'>
								Register your FREE Account,{' '}
							</Link>
						</p>
					</div>
					<div className='max-w-md w-full mx-auto bg-white shadow-xl shadow-gray-900 rounded-lg p-7 space-y-6 '>
						<form
							className='max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6'
							onSubmit={(e) => {
								handlerOnSubmit(e);
							}}
						>
							<p className='text-red-600 -mt-5 -mb-4 font-semibold text-center'>{error}</p>
							<div className='flex flex-col'>
								<label className='text-sm font-bold text-gray-600 mb-1 flex items-center' htmlFor='email'>
									<span className=' inline-flex  items-center justify-center mr-1  border-gray-800  text-gray-500'>
										<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
											<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
										</svg>
									</span>
									Email Address
								</label>
								<input className='border rounded-md bg-white px-3 py-2' type='text' name='email' placeholder='Enter your Email Address' required />
							</div>
							<div className='flex flex-col'>
								<label className='text-sm font-bold text-gray-600 mb-1 flex items-center' htmlFor='password'>
									<span className=' inline-flex  items-center justify-center mr-1  border-gray-800  text-gray-500'>
										<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
											<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
										</svg>
									</span>
									Password
								</label>
								<input className='border rounded-md bg-white px-3 py-2' type='password' name='password' placeholder='Enter your Password' required />
							</div>
							<div className='flex justify-between text-sm'>
								<div className='flex items-center space-x-2 '>
									<input className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' type='checkbox' name='remember' id='remember' />
									<label htmlFor='remember'>Remember me</label>
								</div>
								<div className='hidden lg:block'>
									<Link className='text-indigo-600'>Forgot your Password?</Link>
								</div>
							</div>
							<div>
								<button className='w-full bg-indigo-600 text-white rounded-md p-2'>Sign in</button>
							</div>
							<div className='block md:hidden text-center'>
								<Link className='text-indigo-600'>Forgot your Password?</Link>
							</div>
						</form>
						<div className='relative pb-2'>
							<div className='absolute top-0 left-0 w-full border-b'></div>
							<div className='absolute -top-3.5 left-0 w-full text-center'>
								<span className='bg-white px-3 text-sm'>or continue via</span>
							</div>
						</div>
						<div className='grid grid-cols-1 gap-3 text-xl'>
							<div className='border-2 rounded-md p-3 cursor-pointer flex items-center justify-center text-2xl'>
								<button
									type='button'
									className='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
									onClick={() => {
										handlerGoogleSignIn();
									}}
								>
									<svg width='20' height='20' fill='currentColor' className='mr-2' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
										<path d='M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'></path>
									</svg>
									Sign in with Google
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
