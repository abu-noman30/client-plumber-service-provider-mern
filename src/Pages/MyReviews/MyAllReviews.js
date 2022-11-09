import React from 'react';
import MySingleReview from '../../Components/MySingleReview/MySingleReview';

const MyAllReviews = () => {
	const quotes = [1, 2, 3, 4, 5];

	return (
		<>
			{/* My All Reviews Container */}
			<div className='my-all-reviews-container'>
				<section className='bg-gray-100'>
					<div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
						<div className='items-end justify-between sm:flex'>
							<div className='max-w-xl'>
								<h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>Hello..! Here is your valuable Reviews. </h2>

								<p className='mt-8 max-w-lg text-gray-500'>Here you can see all your reviews. You can also delete your reviews from here. and you can also see your reviews. </p>
							</div>
						</div>

						<div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							{quotes.map((quote, index) => (
								<div key={index}>
									<MySingleReview />
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default MyAllReviews;
