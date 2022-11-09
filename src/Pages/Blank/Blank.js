import React from 'react';
import { Link } from 'react-router-dom';

const Blank = () => {
	return (
		<>
			{/* Blank Page Container */}
			<div className='blank-page-container'>
				<div className='bg-white '>
					<div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 h-screen'>
						<h2 className='text-3xl font-extrabold text-black  sm:text-4xl'>
							<span className='block text-5xl my-3'>Want to Go to Add Review ?</span>
							<span className='block text-indigo-500'>Sorry! you&#x27;r not Loged in.</span>
						</h2>
						<p className='text-xl mt-4 max-w-md mx-auto text-gray-400'>Please Log in to Add Review or Create an Account if you don't have one.</p>
						<div className='lg:mt-0 lg:flex-shrink-0'>
							<div className='mt-12 inline-flex rounded-md shadow'>
								<Link to='/login'>
									<button
										type='button'
										className='py-4 px-12  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
									>
										Login
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blank;
