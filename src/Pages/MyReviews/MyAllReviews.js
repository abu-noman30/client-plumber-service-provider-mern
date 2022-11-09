import React, { useContext, useEffect, useState } from 'react';
import MySingleReview from '../../Components/MySingleReview/MySingleReview';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const MyAllReviews = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	const [myReviewsData, setMyReviewsData] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		const fetchApi = async () => {
			const res = await fetch(`http://localhost:5000/myreviews?email=${currentUser.email}`);
			const data = await res.json();
			// console.log(data);
			setMyReviewsData(data);
			setRefresh(!refresh);
		};
		fetchApi();
	}, [currentUser.email, refresh]);
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
							{myReviewsData.length === 0 ? (
								<div className='flex justify-center items-center'>
									<h1 className='text-2xl font-bold text-gray-500'>No Reviews Found</h1>
								</div>
							) : (
								myReviewsData.map((myReview, index) => (
									<div key={myReview._id}>
										<MySingleReview myReview={myReview} />
									</div>
								))
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default MyAllReviews;
