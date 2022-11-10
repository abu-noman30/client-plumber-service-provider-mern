import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import SingleServices from '../../Components/SingleServices/SingleServices';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const AllServices = () => {
	const loaderData = useLoaderData();
	// console.log(loaderData);
	const services = loaderData;
	const { loading } = useContext(FbaseAuthContext);
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
	return (
		<>
			<Helmet>
				<title>All Services - plumBoy</title>
			</Helmet>
			{/* All Services Container */}
			<div className='all-services-container mb-20'>
				{/* Title Bar */}
				<div className='title-bar text-center mb-20'>
					<h1 className='text-5xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>All Services</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 m-auto rounded-2xl'>
					{/* Card container */}
					{services.map((service) => (
						<SingleServices key={service._id} service={service} />
					))}
				</div>
			</div>
		</>
	);
};

export default AllServices;
