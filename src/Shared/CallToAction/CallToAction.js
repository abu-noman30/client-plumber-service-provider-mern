import React from 'react';

const CallToAction = () => {
	return (
		<>
			{/* Call To Action Container */}
			<div className='call-to-action-container'>
				<div className='relative w-10/12 m-auto flex bg-gray-700 my-20 rounded-lg'>
					{/* :CTA IMAGE */}
					<div className='flex-grow  absolute md:relative w-full md:w-2/5 min-h-full'>
						<img src='https://fancytailwind.com/static/gift1-8fbce5b3c5f9f71276906b95e23beb67.jpg' alt='' className='absolute w-full h-full object-cover object-center opacity-30 md:opacity-100 rounded-lg' />
					</div>

					{/* :CTA MAIN */}
					<div className='relative py-5 px-8 mx-auto w-full md:w-3/5 max-w-md md:max-w-none space-y-4 text-center md:text-left'>
						{/* ::Title */}
						<h2 className='text-3xl sm:text-4xl text-gray-50 font-semibold'>Give Reviews..! Take Benifits..!</h2>
						{/* ::Info */}
						<p className='pb-5 border-b-2 border-gray-400 text-sm text-gray-300'>
							Give reviews to yout favourite services from me and get benifits in return. I will provide you with the best services. and one service is free for you.
						</p>
						{/* ::Form */}
						<form action='' className='w-full flex flex-col space-y-2'>
							<label htmlFor='email' className='text-sm text-gray-300'>
								First, please submit your email below.
							</label>
							{/* Input */}
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Your Email'
								className='form-input h-10 rounded focus:border-gray-50 focus:ring-1 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-700'
							/>
							{/* Submit button */}
							<button type='submit' className='h-10 rounded border-2 border-gray-50 text-gray-50 uppercase transition duration-200 hover:bg-gray-900 hover:border-gray-900'>
								Next
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default CallToAction;
