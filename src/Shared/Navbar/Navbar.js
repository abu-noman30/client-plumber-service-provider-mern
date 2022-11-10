import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Navbar = () => {
	const [state, setState] = useState(false);
	const { currentUser, methodSignOut } = useContext(FbaseAuthContext);

	let navigation = [];
	if (currentUser && currentUser.uid) {
		const loginNavigation = [
			{ title: 'Home', path: '/home' },
			{ title: 'My reviews', path: '/my-reviews' },
			{ title: 'Add Service', path: '/add-services' },
			{ title: 'Blogs', path: '/blogs' }
		];
		navigation = [...loginNavigation];
	} else {
		const noLoginNavigation = [
			{ title: 'Home', path: '/home' },
			{ title: 'Blogs', path: '/blogs' }
		];
		navigation = [...noLoginNavigation];
	}

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
	return (
		<>
			{/* Navbar Container */}

			<div className='navbar-container fixed w-full z-20'>
				<nav className='bg-gray-300 w-full border-b md:border-0 md:static bg-gradient-to-l from-gray-400 via-gray-300 to-gray-200 shadow-xl rounded-lg'>
					<div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
						<div className='flex items-center justify-between py-3 md:py-5 md:block'>
							<NavLink to='/'>
								<div className='flex items-center'>
									<img src='Images/logo.png' width={50} height={50} alt='Float UI logo' />
									<h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-400'>plumBoy</h1>
								</div>
							</NavLink>
							<div className='md:hidden'>
								<button className='text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border' onClick={() => setState(!state)}>
									{state ? (
										<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
											<path
												fillRule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
									) : (
										<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 8h16M4 16h16' />
										</svg>
									)}
								</button>
							</div>
						</div>
						<div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
							<ul className='justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
								{navigation.map((item, idx) => {
									return (
										<li key={idx} className='text-gray-600 hover:text-indigo-600'>
											<NavLink to={item.path}>
												{/* :SMALL BUTTON 1 */}
												<button className='group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-gray-300 text-sm text-gray-700 font-medium transition-all duration-200 ease-out hover:text-gray-600 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none'>
													{/* span::before */}
													<span className='absolute h-0 w-0.5 right-0 top-0 bg-gray-500  transition-all duration-500 ease-out group-hover:h-full' aria-hidden='true' />
													<span className='absolute left-0 bottom-0 bg-gray-500  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full' aria-hidden='true' />
													{item.title}
													{/* span::after */}
													<span className='absolute left-0 bottom-0 bg-gray-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full' aria-hidden='true' />
													<span className='absolute w-0 h-0.5 right-0 top-0 bg-gray-500  transition-all duration-500 ease-out group-hover:w-full' aria-hidden='true' />
												</button>
											</NavLink>
										</li>
									);
								})}
								{currentUser && currentUser.uid ? (
									<>
										<NavLink to='/login'>
											<div
												className='inline-block md:hidden w-full mt-5'
												onClick={() => {
													handlerOnLogout();
												}}
											>
												<button className='py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow w-full'>Logout</button>
											</div>
										</NavLink>
									</>
								) : (
									<>
										<NavLink to='/login'>
											<div className='inline-block md:hidden w-full mt-5'>
												<button className='py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow w-full'>Login</button>
											</div>
										</NavLink>
									</>
								)}
							</ul>
						</div>
						<div className='hidden md:inline-block'>
							{currentUser && currentUser.uid ? (
								<>
									<NavLink to='/login'>
										<button
											className='m-5 group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none text-base text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none'
											onClick={() => {
												handlerOnLogout();
											}}
										>
											Logout
											<span className='absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-blue-700  transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180' aria-hidden='true' />
										</button>
									</NavLink>
								</>
							) : (
								<>
									<NavLink to='/login'>
										<button className='m-5 group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none text-base text-white font-medium overflow-hidden transition-all duration-200 ease-in transform hover:scale-110 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none'>
											Login{/* button::after */}
											<span className='absolute -z-1 z-[-1] top-0 left-0 w-full h-full bg-blue-700  transition-all duration-200 ease-in transform group-hover:scale-150 group-hover:rotate-180' aria-hidden='true' />
										</button>
									</NavLink>
								</>
							)}
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
