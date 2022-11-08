import React, { useContext, useState } from 'react';
import * as FAIcons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Register = () => {
	const { methodCreateUser, methodUpdateProfile, methodSignOut } = useContext(FbaseAuthContext);
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const fullname = form.fullname.value;
		const photoUrl = form.photourl.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(fullname, email, password, photoUrl);

		if (fullname && email && password && photoUrl) {
			// Firebase Auth methods---------------------
			methodCreateUser(email, password)
				.then((userCredential) => {
					// Signed in user
					const user = userCredential.user;
					// Signout user for firebase default behavior of auto login after signup termianted
					handlerOnLogout();
					//  for updating user profile---------
					handlerUpdateProfile(fullname, photoUrl);

					// for sending email verification
					// handlerVerifyEmail();
					// ------------------------------------

					form.reset();
					console.log(user);
					// ...
					// toast.success('Your account has been created successfully. ');
					navigate('/login');
				})
				.catch((error) => {
					const errorMessage = error.message;
					setError(errorMessage);
					console.error(error);
					// ..
				});
		}
	};
	// Email & Password Validation
	const handlerOnEmail = (e) => {
		const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		if (!emailRegEx.test(e.target.value)) {
			setError('Please enter a valid email address');
			return;
		}
		setError('');
	};

	const handlerOnPassword = (e) => {
		if (!/(?=.*[A-Z])/.test(e.target.value)) {
			setError('Password should contain at least one upper case');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*[a-z])/.test(e.target.value)) {
			setError('Password should contain at least one lower case');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*?[0-9])/.test(e.target.value)) {
			setError('Password should contain at least one digit');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*?[!@#$&*~])/.test(e.target.value)) {
			setError('Password should contain at least one Special character');
			return;
		} else {
			setError('');
		}
		if (!/.{8,}/.test(e.target.value)) {
			setError('Password Must be at least 8 characters in length');
			return;
		} else {
			setError('');
		}
		setError('');
	};

	// User logout
	const handlerOnLogout = () => {
		methodSignOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	//  for updating the user profile
	const handlerUpdateProfile = (fullname, photourl) => {
		methodUpdateProfile(fullname, photourl)
			.then(() => {
				// Update successful
				// ...
			})
			.catch((error) => {
				// An error occurred
				// ...
			});
	};
	return (
		<>
			{/* Register Container */}
			<div className='register-container pt-20 '>
				<section>
					<div className='px-4 py-12 mx-auto '>
						<div className='justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle w-full md:w-10/12'>
							<div className='grid flex-wrap w-full items-center justify-around  grid-cols-1 md:grid-cols-12 mx-auto shadow-xl  rounded-xl '>
								<div className=' p-3 w-full col-span-12 lg:col-span-5'>
									<div className='flex flex-col max-w-full p-6 rounded-md sm:p-10 shadow-lg shadow-gray-800'>
										<div className='mb-8 text-center'>
											<h1 className='my-3 text-4xl font-bold'>Register</h1>
											<p className='text-sm '>Register your free Account </p>
										</div>
										<form
											className=''
											onSubmit={(e) => {
												handlerOnSubmit(e);
											}}
										>
											<div className='space-y-4'>
												<div>
													<label htmlFor='name' className='mb-2 text-sm flex items-center'>
														<span className=' inline-flex  items-center justify-center mr-1  border-gray-800  text-gray-500'>
															<FAIcons.FaUserEdit />
														</span>
														Full Name
													</label>

													<input type='text' name='fullname' placeholder='Your Full Name' className='w-full px-3 py-2 border rounded-md' required />
												</div>
												<div>
													<label htmlFor='photourl' className=' mb-2 text-sm flex items-center'>
														<span className=' inline-flex  items-center justify-center mr-1  border-gray-800  text-gray-500'>
															<FAIcons.FaChalkboardTeacher />
														</span>
														Photo URL
													</label>
													<input type='text' name='photourl' placeholder='Your Photo URL' className='w-full px-3 py-2 border rounded-md' />
												</div>
												<div>
													<label htmlFor='email' className=' mb-2 text-sm flex items-center'>
														<span className=' inline-flex  items-center justify-center mr-1  border-gray-800  text-gray-500'>
															<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
																<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
															</svg>
														</span>
														Email address
													</label>
													<input
														type='email'
														name='email'
														placeholder='Your Email Address'
														className='w-full px-3 py-2 border rounded-md'
														required
														onChange={(e) => {
															handlerOnEmail(e);
														}}
													/>
												</div>
												<div>
													<div className='flex justify-between mb-2'>
														<label htmlFor='password' className='text-sm flex items-center'>
															<span className=' inline-flex  items-center justify-center mr-1  border-gray-800  text-gray-500'>
																<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
																	<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
																</svg>
															</span>
															Password
														</label>
													</div>
													<input
														type='password'
														name='password'
														placeholder='Your Password'
														className='w-full px-3 py-2 border rounded-md '
														onChange={(e) => {
															handlerOnPassword(e);
														}}
														required
													/>
												</div>
												<p className='text-red-600 font-semibold text-center'>{error}</p>
											</div>

											<div className='space-y-2 mt-8'>
												<div>
													<button className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
														Register
													</button>
												</div>
												<p className='px-6 text-sm text-center'>
													Allready Have an account?
													<a rel='noopener noreferrer' href='/login' className='hover:underline'>
														Login
													</a>
												</p>
											</div>
										</form>
									</div>
								</div>
								<div className='order-first hidden w-full lg:block lg:col-span-7 px-5'>
									<img
										className='object-fill h-[40rem] w-full bg-cover rounded-lg'
										src='https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Register;
