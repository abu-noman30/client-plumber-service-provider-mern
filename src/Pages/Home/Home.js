import React from 'react';
import Header from '../../Layouts/Header/Header';
import About from '../../Shared/About/About';
import CallToAction from '../../Shared/CallToAction/CallToAction';
import Contact from '../../Shared/Contact/Contact';
import Services from '../../Shared/Services/Services';

const Home = () => {
	return (
		<>
			{/* Header Section */}
			<div className='header-section'>
				<Header />
			</div>
			{/* About Section */}
			<div className='about-section'>
				<About />
			</div>
			{/* Services Section */}
			<div className='services-section'>
				<Services />
			</div>
			<div className='services-section'></div>
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
