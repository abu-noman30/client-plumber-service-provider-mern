import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
	return (
		<>
			{/* Login Container */}
			<div className='login-container mb-20 bg-gradient-to-l from-gray-900 to-gray-300'>
				<div class='flex flex-col items-center justify-center space-y-10 py-20 px-4 sm:px-6 lg:px-8 bg-[url(https://i.ibb.co/BPzLMHy/671308.jpg)] bg-no-repeat bg-cover mix-blend-overlay bg-fixed'>
					<div>
						<h1 class='mt-6 text-center text-4xl font-extrabold text-gray-100 pt-10'>Sign in to your account</h1>
						<p class='mt-2 text-center text-sm text-gray-200'>
							Or,{' '}
							<Link to='/register' class='font-medium text-indigo-300 border-b border-indigo-600'>
								Register your FREE Account{' '}
							</Link>
						</p>
					</div>
					<div class='max-w-md w-full mx-auto bg-white shadow-xl shadow-gray-900 rounded-lg p-7 space-y-6 '>
						<form class='max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6'>
							<div class='flex flex-col'>
								<label class='text-sm font-bold text-gray-600 mb-1' for='email'>
									Email Address
								</label>
								<input class='border rounded-md bg-white px-3 py-2' type='text' name='email' id='email' placeholder='Enter your Email Address' />
							</div>
							<div class='flex flex-col'>
								<label class='text-sm font-bold text-gray-600 mb-1' for='password'>
									Password
								</label>
								<input class='border rounded-md bg-white px-3 py-2' type='password' name='password' id='password' placeholder='Enter your Password' />
							</div>
							<div class='flex justify-between text-sm'>
								<div class='flex items-center space-x-2 '>
									<input class='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' type='checkbox' name='remember' id='remember' />
									<label for='remember'>Remember me</label>
								</div>
								<div className='hidden lg:block'>
									<a href='/' class='text-indigo-600'>
										Forgot your Password?
									</a>
								</div>
							</div>
							<div>
								<button class='w-full bg-indigo-600 text-white rounded-md p-2'>Sign in</button>
							</div>
							<div className='block md:hidden text-center'>
								<a href='/' class='text-indigo-600'>
									Forgot your Password?
								</a>
							</div>
						</form>
						<div class='relative pb-2'>
							<div class='absolute top-0 left-0 w-full border-b'></div>
							<div class='absolute -top-3 left-0 w-full text-center'>
								<span class='bg-white px-3 text-sm'>or continue via</span>
							</div>
						</div>
						<div class='grid grid-cols-1 gap-3 text-xl'>
							<div class='border-2 rounded-md p-3 cursor-pointer flex items-center justify-center text-2xl'>
								<button
									type='button'
									class='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
								>
									<svg width='20' height='20' fill='currentColor' class='mr-2' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
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
