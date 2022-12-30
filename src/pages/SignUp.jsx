import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../partials/Banner';
import Logo from '../images/logo.png';
import Navbar from '../partials/navbar';

function SignUp() {
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			{/*  Site header */}
			<Navbar />

			{/*  Page content */}
			<main className='flex-grow'>
				<section className='bg-gradient-to-b from-gray-100 to-white'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 '>
						<div className='flex items-center justify-center min-h-screen'>
							{/* Page header */}


							{/* Form */}
							<div className='max-w-md sm:p-12 mx-auto sm:border border-gray-300 rounded-lg'>
							<div className='pb-6'>
								<h1 className='h1 flex items-center justify-center'>
									<img
										className="h-14"
										src={Logo}
										alt=""
									/> Lander
								</h1>
							</div>
								<div className='flex flex-wrap -mx-3 mt-6'>
									<div className='w-full px-3'>

										<a href="https://discord.com/api/oauth2/authorize?client_id=1049873528981295104&permissions=68608&scope=bot" target="_blank" rel="noreferrer">

											<button className='btn text-white bg-primary hover:bg-primary-dark w-full'>
												Add to Discord
											</button>
										</a>

									</div>
								</div>
								<div className='flex flex-wrap -mx-3 mt-6'>
									<div className='w-full px-3'>
										<button disabled className='btn text-white bg-gray-900 hover:bg-gray-800 w-full'>
											Add to Telegram (Coming Soon)
										</button>
									</div>
								</div>
								{/* <div className='flex items-center my-6'>
									<div
										className='border-t border-gray-300 flex-grow mr-3'
										aria-hidden='true'
									></div>
								</div> */}
							</div>
						</div>
					</div>
				</section>
			</main>

			<Banner />
		</div>
	);
}

export default SignUp;
