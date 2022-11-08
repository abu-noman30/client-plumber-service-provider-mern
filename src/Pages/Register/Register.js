import React from 'react';

const Register = () => {
	return (
		<>
			{/* Register Container */}
			<div className='register-container pt-20 '>
				<section>
					<div class='px-4 py-12 mx-auto '>
						<div class='justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle w-full md:w-10/12'>
							<div class='grid flex-wrap w-full items-center justify-around  grid-cols-1 md:grid-cols-12 mx-auto shadow-xl  rounded-xl '>
								<div className=' p-3 w-full col-span-12 lg:col-span-5'>
									<div className='flex flex-col max-w-full p-6 rounded-md sm:p-10 shadow-lg shadow-gray-800'>
										<div className='mb-8 text-center'>
											<h1 className='my-3 text-4xl font-bold'>Register</h1>
											<p className='text-sm '>Register your free Account </p>
										</div>
										<form
											novalidate=''
											action=''
											className='space-y-12 ng-untouched ng-pristine ng-valid'
										>
											<div className='space-y-4'>
												<div>
													<label for='name' className='block mb-2 text-sm'>
														Full Name
													</label>
													<input
														type='text'
														name='name'
														placeholder='Your Full Name'
														className='w-full px-3 py-2 border rounded-md'
													/>
												</div>
												<div>
													<label for='email' className='block mb-2 text-sm'>
														Photo URL
													</label>
													<input
														type='text'
														name='photourl'
														placeholder='Your Photo URL'
														className='w-full px-3 py-2 border rounded-md'
													/>
												</div>
												<div>
													<label for='email' className='block mb-2 text-sm'>
														Email address
													</label>
													<input
														type='email'
														name='email'
														id='email'
														placeholder='leroy@jenkins.com'
														className='w-full px-3 py-2 border rounded-md'
													/>
												</div>
												<div>
													<div className='flex justify-between mb-2'>
														<label for='password' className='text-sm'>
															Password
														</label>
													</div>
													<input
														type='password'
														name='password'
														id='password'
														placeholder='*****'
														className='w-full px-3 py-2 border rounded-md '
													/>
												</div>
											</div>
											<div className='space-y-2'>
												<div>
													<button
														type='button'
														class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
													>
														Register
													</button>
												</div>
												<p className='px-6 text-sm text-center'>
													Allready Have an account?
													<a
														rel='noopener noreferrer'
														href='/login'
														className='hover:underline'
													>
														Login
													</a>
												</p>
											</div>
										</form>
									</div>
								</div>
								<div class='order-first hidden w-full lg:block lg:col-span-7 px-5'>
									<img
										class='object-fill h-[40rem] w-full bg-cover rounded-lg'
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
