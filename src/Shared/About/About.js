import React from 'react';

const About = () => {
	return (
		<>
			{/* About Container */}
			<div className='about-container'>
				<div className='w-10/12 p-4 mx-auto px-4 sm:px-6 lg:px-8 relative lg:mt-10 shadow-sm rounded-lg'>
					<div className='relative'>
						<div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
							<div className='lg:col-start-2 lg:max-w-2xl ml-auto'>
								<p className='text-base leading-6 text-indigo-500 font-semibold uppercase'>ABOUT</p>
								<h4 className='mt-2 text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9'>Fast & Reliable Plumbing Service</h4>
								<p className='mt-4 text-lg leading-6 text-gray-500 '>
									Professional plumber with 5years of experience in the industry. Dedicated to providing you with the best service possible. And Committed to providing you with the best service possible.
								</p>
								<ul className='mt-8 md:grid md:grid-cols-2 gap-6'>
									<li className='mt-6 lg:mt-0'>
										<div className='flex'>
											<span className='flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-600 text-white'>
												<svg className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
													<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'></path>
												</svg>
											</span>
											<span className='ml-4 text-base leading-6 font-medium text-gray-500 '>Live modifications</span>
										</div>
									</li>
									<li className='mt-6 lg:mt-0'>
										<div className='flex'>
											<span className='flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-600 text-white'>
												<svg className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
													<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'></path>
												</svg>
											</span>
											<span className='ml-4 text-base leading-6 font-medium text-gray-500 '>Data tracker</span>
										</div>
									</li>
									<li className='mt-6 lg:mt-0'>
										<div className='flex'>
											<span className='flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-600 text-white'>
												<svg className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
													<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'></path>
												</svg>
											</span>
											<span className='ml-4 text-base leading-6 font-medium text-gray-500 '>24/24 support</span>
										</div>
									</li>
									<li className='mt-6 lg:mt-0'>
										<div className='flex'>
											<span className='flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-600 text-white'>
												<svg className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
													<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'></path>
												</svg>
											</span>
											<span className='ml-4 text-base leading-6 font-medium text-gray-500 '>Free tips to improve work time</span>
										</div>
									</li>
								</ul>
							</div>
							<div className='mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1'>
								<div className='relative space-y-4'>
									<div className='flex items-end justify-center lg:justify-start space-x-4'>
										<img
											className='rounded-lg shadow-lg w-32 md:w-56'
											width='200'
											src='https://i.ibb.co/J7gnrRq/male-plumber-uniform-installing-drain-pipe-kitchen-handywoman-with-toolbag-repair-sink-sanitary-equi.jpg'
											alt='1'
										/>
										<img className='rounded-lg shadow-lg w-40 md:w-64' width='260' src='https://i.ibb.co/nn07XQC/frowning-plumber-repairing-sink-13339-276997.webp' alt='2' />
									</div>
									<div className='flex items-start justify-center lg:justify-start space-x-4 ml-12'>
										<img className='rounded-lg shadow-lg w-24 md:w-40' width='170' src='https://i.ibb.co/64VLb62/black-faucet-with-steel-sink-stylish-modern-kitchen-169016-19744.webp' alt='3' />
										<img className='rounded-lg shadow-lg w-32 md:w-56' width='200' src='https://i.ibb.co/tbNf8NM/handyman-helping-senior-woman-kitchen-1098-17865.webp' alt='4' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
