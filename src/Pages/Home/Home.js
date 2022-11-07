import React from 'react';
import Header from '../../Layouts/Header/Header';
import CallToAction from '../../Shared/CallToAction/CallToAction';
import Contact from '../../Shared/Contact/Contact';

const Home = () => {
	return (
		<>
			{/* Header Section */}
			<div className='header-section'>
				<Header />
			</div>
			{/* Services Section */}
			{/* Call To Action Section */}
			<div className='call-to-action-section'>
				<CallToAction />
			</div>
			{/* Contact Section */}
			<div className='contact-section'>
				<Contact />
			</div>
		</>
	);
};

export default Home;
